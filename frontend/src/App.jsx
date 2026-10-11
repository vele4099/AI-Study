import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Parse from "./pages/Parse.jsx";
import BackendStatus from "./pages/BackendStatus.jsx";
import Auth from "./pages/Auth.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


console.log("APP RENDERED");

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parse" element={<Parse />} />
        <Route path="/status" element={<BackendStatus />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
