# AI Study Gen 
### Specification and Techincal Plan

## Planned WebPages
### 1. Auth:
    - Login
    - registration
    - session handling 
### 2. Homepage/DashBoard
    - overview 
    - daily recap 
    - assignment priority tracker 
    - quick-start study decks 
    - analysis visual (UI - Stretch)
### 3. Study 
    - Spaced Repitition flashcard interface 
    - active recall session (OPEN TO IDEAS)
    - Study Timer (promodo)
### 4. AI Chat 
    #### (NOTE NOT AN MVP < AI for "dynamic" flashcards is> --- in other words ai is a backend function and will be updating flashcards inside the "STUDY" Page)
    - conversational study assistant 
    - contextual Q&A over notes
### 5. Upload/Input (upload)
    - Batch text/note
    - Live card preview & single key-value staging: preview front/back pairs as they get generated or entered, compiling an in-memory reference file the client validates before hitting the database
    - Validation checks for empty fields, duplicate terms, character limits, and validates that Ollama returned valid JSON arrays matching the exact card schema before saving
    - Ollama card generation 

### 6. Analysis/Analytics
    - Retention rates
    - Study Streak
    - Completetion metrics
    - Session History

### Reversible Navigation: Users can safely exit any active workflow with zero state locking or accidental data loss. (e.g., leaving a session with a Pomodoro timer active at T - 04:15



## Executive Summary and Obetective 
### 1. Scope of the System Architechture

- Stack: MERN (MongoDB, Express, React, Node.js).

- Database Design: Referencing Mongoose schemas (separate collections for Decks and Cards rather than unbounded nesting).

- AI Pipeline: Local Ollama backend for zero-cost, local flashcard generation and conversational study support.

### 2. Functional Requirements
- Batch Input & Generation: Client validates raw batch text, feeds it to the local Ollama endpoint via Express, parses structured JSON, and previews cards before persistence.

- Spaced Repetition System (SRS): Interval tracking based on card ratings (e.g., Easy, Medium, Hard) to schedule next review timestamps.

- Assignment Priority Tracker: Dashboard task queue sorted by due date and difficulty/weight.

- Study Timer: Integrated focus timer (Pomodoro/stopwatch) attached to study sessions.

- Interactive AI Chat: Context-grounded assistant for concept breakdown and active recall testing.

- Progress Analytics: Visual summaries of cards reviewed, retention accuracy, and daily time logged.

### 3. Non-Functional Requirements

- Performance: Generation batch processing and UI preview feedback under acceptable local latency constraints.

- Data Integrity: Strict Mongoose validation and schema references preventing orphaned cards.

- Security & Auth: Secure JWT or session-based user authentication protecting user decks and notes.