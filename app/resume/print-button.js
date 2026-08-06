"use client";

export default function PrintButton() {
  return (
    <button className="button primary" type="button" onClick={() => window.print()}>
      Print / Save PDF
    </button>
  );
}
