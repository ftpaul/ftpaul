import React from 'react';

const ImageGallery = () => {
  const images = [
    { src: '/images/20211217_155554.jpg', alt: 'Cockpit view' },
    { src: '/images/20220521_134209_2.jpg', alt: 'Conference event' },
    { src: '/images/20221016_181208_2.jpg', alt: 'Workstation with DO MORE screen' },
    { src: '/images/20230113_155734_3.jpg', alt: 'Mountain view with clouds' },
    { src: '/images/20230826_113331_2.jpg', alt: 'Astronaut in desert' },
  ];

  return (
    <div className="flex justify-center items-center space-x-12 py-8">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-64 h-64 rounded-lg overflow-hidden shadow-lg transform ${
            index % 2 === 0 ? 'rotate-2' : '-rotate-2'
          } transition-transform duration-300 hover:scale-105`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
