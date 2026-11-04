import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudyPage from "./pages/StudyPage.jsx";
import Auth from "./pages/Auth.jsx";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [user, setUser] = useState(null);

  const handleLogin = (name) => {
    setUser(name);
    setIsAuthenticated(true);
    setActivePage("home");
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#0b0f19", color: "#f8fafc" }}>
        <Auth onLogin={handleLogin} />
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#0b0f19", color: "#f8fafc" }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} onLogout={handleLogout} user={user} />

      {activePage === "home" && (
        <HomePage onNavigateToStudy={() => setActivePage("study")} />
      )}

      {activePage === "study" && (
        <StudyPage />
      )}

      <Footer />
    </div>
  );
}