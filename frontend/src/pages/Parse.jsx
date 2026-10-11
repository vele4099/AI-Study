import { useState } from "react";
import axios from "axios";

export default function Parse() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("/api/ai/parse", { text });
    setResult(res.data.parsed);
  };

  return (
    <div>
      <h1>AI Text Parser</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your study notes here..."
        rows={10}
        cols={60}
      />

      <button onClick={handleSubmit}>Parse Text</button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
