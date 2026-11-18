import React, { useState } from "react";
import FlashcardLayout from "../components/FlashcardLayout.jsx";

const SINGLE_WORD_REGEX = /^[A-Za-z]+(?:['\-][A-Za-z]+)?$/;
const DEFINITION_REGEX = /^\s*([A-Za-z0-9,.'";:()\-]+\s+)+[A-Za-z0-9,.'";:()\-]+\s*$/;

export default function HomePage() {
  const [cards, setCards] = useState([]);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [error, setError] = useState("");

  const handleAddCard = (e) => {
    e.preventDefault();
    const cleanWord = word.trim();
    const cleanDef = definition.trim();

    if (!cleanWord || !cleanDef) {
      setError("Both term and definition are required.");
      return;
    }

    if (!SINGLE_WORD_REGEX.test(cleanWord)) {
      setError("Term must be exactly one valid word without spaces or numbers.");
      return;
    }

    if (!DEFINITION_REGEX.test(cleanDef)) {
      setError("Definition must contain at least two words.");
      return;
    }

    setError("");
    setCards([...cards, { id: Date.now(), word: cleanWord, definition: cleanDef }]);
    setWord("");
    setDefinition("");
  };

  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "0 16px", fontFamily: "sans-serif" }}>
      <h2>Card Builder</h2>

      <form onSubmit={handleAddCard} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Single word (e.g., Photosynthesis)"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          style={{ padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Definition (at least 2 words)"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          style={{ padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>Add to Deck</button>
      </form>

      {error && <p style={{ color: "#ef4444", margin: "0 0 16px", fontSize: "0.9rem" }}>{error}</p>}

      <h3>Deck Preview ({cards.length})</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {cards.map((c) => (
          <FlashcardLayout key={c.id} word={c.word} definition={c.definition} />
        ))}
      </div>
    </main>
  );
}