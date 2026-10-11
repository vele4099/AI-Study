export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid var(--border)" }}>
      <a href="/" style={{ marginRight: "1rem" }}>Home</a>
      <a href="/parse" style={{ marginRight: "1rem" }}>AI Parser</a>
      <a href="/status" style={{ marginRight: "1rem" }}>Backend Status</a>
      <a href="/auth">Auth</a>
    </nav>
  );
}
