"use client";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    let ctx: any = null;
    let resizeTimeout: NodeJS.Timeout | null = null;
    let cleanupHandle: (() => void) | null = null;

    // Wait for images to load before setting up animations
    const waitForImagesToLoad = () => {
      return new Promise<void>((resolve) => {
        const images = document.querySelectorAll('img');
        if (images.length === 0) {
          resolve();
          return;
        }

        let loadedCount = 0;
        const checkComplete = () => {
          if (loadedCount === images.length) {
            // Wait a bit more for layout to settle
            setTimeout(resolve, 100);
          }
        };

        images.forEach(img => {
          if (img.complete) {
            loadedCount++;
          } else {
            img.addEventListener('load', () => {
              loadedCount++;
              checkComplete();
            });
            img.addEventListener('error', () => {
              loadedCount++;
              checkComplete();
            });
          }
        });

        checkComplete();
      });
    };

    const setupScrollTriggers = () => {
      const shapes = gsap.utils.toArray<HTMLElement>(".floating-shape");
      const slots = gsap.utils.toArray<HTMLElement>(".target-slot");
      const footer = document.querySelector(".sorter-footer");

      if (shapes.length === 0 || slots.length === 0 || !footer) {
        return;
      }

      // Reset everything
      gsap.set(shapes, { x: 0, y: 0, rotation: 0, scale: 1 });

      // Capture initial positions AFTER images are loaded
      const shapeInitialPositions = shapes.map(shape => {
        const rect = shape.getBoundingClientRect();
        return {
          centerX: rect.left + rect.width / 2,
          centerY: rect.top + rect.height / 2
        };
      });

      shapes.forEach((shape, i) => {
        const slot = slots[i];
        if (!slot) return;

        const shapeInitial = shapeInitialPositions[i];

        gsap.to(shape, {
          scrollTrigger: {
            trigger: ".sorter-footer",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Get current slot position in viewport
              const slotRect = slot.getBoundingClientRect();
              const slotCenterX = slotRect.left + slotRect.width / 2;
              const slotCenterY = slotRect.top + slotRect.height / 2;

              // Calculate delta from initial position to target slot position
              const deltaX = slotCenterX - shapeInitial.centerX;
              const deltaY = slotCenterY - shapeInitial.centerY;

              // Apply transforms based on scroll progress
              gsap.set(shape, {
                x: deltaX * self.progress,
                y: deltaY * self.progress,
                rotation: 0,
                scale: 0.9 + (0.1 * (1 - self.progress)),
              });
            }
          }
        });
      });

      ScrollTrigger.refresh();
    };

    const initializeAnimations = async () => {
      // Wait for images to load first
      await waitForImagesToLoad();

      ctx = gsap.context(() => {
        setupScrollTriggers();
      }, containerRef);

      // Handle viewport changes by killing and resetting animations
      let lastViewportHeight = window.innerHeight;

      const handleViewportChange = () => {
        clearTimeout(resizeTimeout!);
        resizeTimeout = setTimeout(() => {
          // Only refresh if viewport height actually changed
          if (window.innerHeight !== lastViewportHeight) {
            lastViewportHeight = window.innerHeight;
            
            // Kill all ScrollTriggers and re-initialize
            if (ctx) {
              ctx.revert();
            }
            setupScrollTriggers();
          }
        }, 100); // Shorter debounce
      };

      window.addEventListener('resize', handleViewportChange);
      window.addEventListener('orientationchange', handleViewportChange);

      return () => {
        clearTimeout(resizeTimeout!);
        window.removeEventListener('resize', handleViewportChange);
        window.removeEventListener('orientationchange', handleViewportChange);
      };
    };

    initializeAnimations().then(cleanup => {
      cleanupHandle = cleanup;
    });

    return () => {
      if (ctx) {
        ctx.revert();
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      if (cleanupHandle) {
        cleanupHandle();
      }
    };
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}