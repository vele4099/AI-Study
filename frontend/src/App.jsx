import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import TutorDashboard from "./pages/TutorDashboard.jsx";
import Assignments from "./pages/Assignments.jsx";
import StudyTools from "./pages/StudyTools.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<TutorDashboard />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/tools" element={<StudyTools />} />
      </Routes>
    </Router>
  );
}

export default App;
