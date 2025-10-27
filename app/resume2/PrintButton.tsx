// app/resume2/PrintButton.tsx
"use client";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} aria-label="Download PDF" className="printButton">
      Download PDF
    </button>
  );
}