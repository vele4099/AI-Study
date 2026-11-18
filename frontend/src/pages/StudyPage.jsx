import React, { useState } from "react";
import FlashcardLayout from "../components/FlashcardLayout.jsx";

const SINGLE_WORD_REGEX = /^[A-Za-z]+(?:['\-][A-Za-z]+)?$/;
const DEFINITION_REGEX = /^\s*([A-Za-z0-9,.'";:()\-]+\s+)+[A-Za-z0-9,.'";:()\-]+\s*$/;

export default function StudyPage() {
  const [cards, setCards] = useState([
    { id: 1, word: "Polymorphism", definition: "The ability of different classes to respond to the same message in distinct ways." },
    { id: 2, word: "Encapsulation", definition: "Bundling data and methods that operate on that data within a single unit." }
  ]);
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
      setError("Term must be a single word without spaces or numbers.");
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
    <div style={{ maxWidth: "680px", margin: "40px auto", padding: "0 16px" }}>
      <h2>Study Deck & Quick Builder</h2>

      <form onSubmit={handleAddCard} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="Single Term (e.g. Recursion)"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #334155", background: "#1e293b", color: "#fff" }}
        />
        <input
          type="text"
          placeholder="Definition (at least 2 words)"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #334155", background: "#1e293b", color: "#fff" }}
        />
        {error && <span style={{ color: "#ef4444", fontSize: "0.85rem" }}>{error}</span>}
        <button type="submit" style={{ padding: "10px", background: "#38bdf8", color: "#0f172a", fontWeight: "bold", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Add Card
        </button>
      </form>

      <h3>Review Cards ({cards.length})</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {cards.map((c) => (
          <FlashcardLayout key={c.id} word={c.word} definition={c.definition} />
        ))}
      </div>
    </div>
  );
}