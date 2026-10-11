
export default function Home() {
  return (
    <div className="page">
      <h1>AI Study App</h1>
      <p>Welcome! Choose a tool to begin.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="/parse">AI Text Parser</a></li>
        <li><a href="/status">Backend Status</a></li>
        <li><a href="/auth">Login / Register</a></li>
      </ul>
    </div>
  );
}
