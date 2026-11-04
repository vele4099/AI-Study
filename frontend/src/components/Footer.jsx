import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} AI Study App. Local-first card generation.</p>
    </footer>
  );
}