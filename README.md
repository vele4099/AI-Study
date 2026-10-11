# AI-Study — Project Starter

Welcome to the AI-Study project! This repo is the early foundation for a study tool that blends spaced repetition, active recall, and AI-powered parsing. The goal right now is simple: build a clean base so the team can jump in without getting lost.

This README covers:
- What you need installed
- How to run the app (frontend + backend)
- How the project is structured
- What’s currently working
- What’s still in progress

---

## Requirements

Make sure you have these installed before running anything:

- **Node.js** (v18+ recommended)
- **npm** (comes with Node)
- **Git**
- **MongoDB Atlas account** or local MongoDB
- **VS Code** (recommended)
- **GitHub account** (for Codespaces access)

If you're using **GitHub Codespaces**, most of this is already set up for you.

---

## Project Structure (quick overview)

AI-Study/
backend/
server.js
db.js
routes/
controllers/
models/   (coming soon)

frontend/
src/
App.jsx
main.jsx
index.css
components/
Navbar.jsx
Footer.jsx
pages/
Home.jsx
Parse.jsx
BackendStatus.jsx
Auth.jsx
utils/
api.js

**Frontend** runs on Vite (React).  
**Backend** runs on Express + MongoDB.

The goal is to keep things readable and modular so nobody gets lost.

---

## 🖥 Running the Frontend

Inside `/frontend`:

```bash
npm install
npm run dev

```
This starts the React app on port 5173.
If you're in Codespaces, it will auto-forward the port and show a link.

#FrontEnd
- Clean routing
- Navbar + Footer
- Basic page structure
- Backend status checker
- Text parser UI (AI integration coming soon)
#BackEnd
- MongoDB connection
- Test route (/api/test)
- Basic page structure
- AI route scaffold (/api/ai/parse)
- Basic Express server
