import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">AI Study</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/tools">Study Tools</Link></li>
      </ul>
    </nav>
  );
}
