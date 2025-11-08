"use client"

import { useEffect, useState } from "react";

export default function PrintButton() {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    const h = typeof window !== "undefined" ? window.location.hostname : "";
    setIsLocalhost(
      h === "localhost" || h === "127.0.0.1" || h === "::1" || h.endsWith(".local")
    );
  }, []);

  const pdfPath = "/2025_Paulo_Teixeira.pdf";

  return (
    <button
      onClick={isLocalhost ? () => window.print() : () => window.open(pdfPath, "_blank")}
      aria-label="Download PDF"
      className="printButton"
    >
      Download PDF
    </button>
  );
}