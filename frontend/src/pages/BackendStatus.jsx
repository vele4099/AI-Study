import React, { useState } from "react";
import api from "../utils/api";

export default function BackendStatus() {
  const [status, setStatus] = useState(null);

  const checkStatus = async () => {
    try {
      const res = await api.get("/");
      setStatus(res.data);
    } catch (err) {
      setStatus({ error: err.message });
    }
  };

  const checkMongo = async () => {
    try {
      const res = await api.get("/api/test");
      setStatus(res.data);
    } catch (err) {
      setStatus({ error: err.message });
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Backend Status</h1>

      <button onClick={checkStatus}>Check Server</button>
      <button onClick={checkMongo} style={{ marginLeft: "1rem" }}>
        Check MongoDB
      </button>

      {status && (
        <pre style={{ marginTop: "2rem" }}>
          {JSON.stringify(status, null, 2)}
        </pre>
      )}
    </div>
  );
}
