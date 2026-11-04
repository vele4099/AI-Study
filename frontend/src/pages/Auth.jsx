import React, { useState } from "react";

export default function Auth({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  //This is the auth page no checks are being made 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() && !password.trim()) {
      setError("Please enter at least one character in either field.");
      return;
    }
    setError("");
    onLogin(username.trim() || "Guest");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "24px", background: "#1e293b", borderRadius: "8px", border: "1px solid #334155", color: "#f8fafc" }}>
      <h2 style={{ marginTop: 0 }}>Sign In</h2>
      <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Dev Bypass: Type any character to continue.</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #475569", background: "#0f172a", color: "#fff" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #475569", background: "#0f172a", color: "#fff" }}
        />
        {error && <span style={{ color: "#ef4444", fontSize: "0.85rem" }}>{error}</span>}
        <button type="submit" style={{ padding: "10px", background: "#10b981", color: "#0f172a", fontWeight: "bold", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Log In
        </button>
      </form>
    </div>
  );
}