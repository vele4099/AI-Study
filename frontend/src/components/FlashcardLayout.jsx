import React, { useState } from "react";

export default function FlashcardLayout({ word, definition }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        border: "1px solid #334155",
        borderRadius: "8px",
        padding: "24px",
        cursor: "pointer",
        userSelect: "none",
        textAlign: "center",
        background: isFlipped
          ? "linear-gradient(135deg, #1e3a8a, #065f46)"
          : "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        transition: "background 0.3s ease, transform 0.15s ease",
        transform: isFlipped ? "scale(0.99)" : "scale(1)"
      }}
    >
      <span style={{ fontSize: "0.75rem", opacity: 0.6, letterSpacing: "1px", textTransform: "uppercase" }}>
        {isFlipped ? "Definition" : "Term"} (Click to flip)
      </span>
      <p style={{ fontSize: "1.2rem", margin: "10px 0 0" }}>
        {isFlipped ? definition : word}
      </p>
    </div>
  );
}