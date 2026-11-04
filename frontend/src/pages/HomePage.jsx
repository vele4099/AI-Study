import React from "react";
import "./HomePage.css";

export default function HomePage({ onNavigateToStudy }) {
  return (
    <main className="homepage-container">
      <section className="hero-banner">
        <h1>Master Your Study Material</h1>
        <p>
          Generate spaced repetition cards, run active recall intervals, and organize 
          your assignments without external API costs. GO STUDY!
        </p>
        <button className="primary-btn" onClick={onNavigateToStudy}>
          Start Flashcards
        </button>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Assignment Tracker</h3>
          <p>Prioritize coursework by upcoming deadlines and task weight.</p>
        </div>
        <div className="dashboard-card">
          <h3>Daily Review</h3>
          <p>0 cards scheduled for review today. Keep your streak active.</p>
        </div>
        <div className="dashboard-card">
          <h3>AI Engine</h3>
          <p>Local Ollama instance ready for structured card generation.</p>
        </div>
      </section>
    </main>
  );
}