import axios from "axios";
import { API_URL } from "../utils/api";

export default function Home() {
  const testBackend = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/test`);
      console.log("Backend says:", res.data);
    } catch (err) {
      console.error("Error talking to backend:", err);
    }
  };

  testBackend();

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the AI Study App.</p>
    </div>
  );
}
