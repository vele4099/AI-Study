import React from "react";
import "./Navbar.css";

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">AI Study Deck</div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            className={activePage === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActivePage("home");
            }}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#study"
            className={activePage === "study" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActivePage("study");
            }}
          >
            Study & Builder
          </a>
        </li>
        <li>
          <a
            href="#auth"
            className={activePage === "auth" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActivePage("auth");
            }}
          >
            Account
          </a>
        </li>
      </ul>
    </nav>
  );
}