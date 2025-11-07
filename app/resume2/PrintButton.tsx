"use client";

export default function PrintButton() {
  const isLocalhost =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "0.0.0.0");

  const pdfPath = "/2025_Paulo_Teixeira.pdf"; 

  if (isLocalhost) {
    return (
      <button onClick={() => window.print()} aria-label="Download PDF" className="printButton">
        Download PDF
      </button>
    );
  }

  return (
    <a
      href={pdfPath}
      className="printButton"
      aria-label="Download PDF"
      target="_blank"
      rel="noopener noreferrer"
      download
    >
      Download PDF
    </a>
  );
}