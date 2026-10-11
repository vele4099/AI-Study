# AI Study — Planning & User Stories

This document outlines the vision, learning techniques, and user stories behind AI Study. 

---

## Project Description

AI Study is a responsive learning tool designed to help college students organize coursework, study effectively, and access AI-powered learning tools without digging through Canvas or random search engines.

The app blends:
- Smart organization
- AI comprehension analysis
- Adaptive flashcards
- Active recall
- Pomodoro-style timing
- Surprise quizzes
- Topic-based mastery tracking

The goal is simple: **reduce friction, increase clarity, and help students learn faster.**

---

## Core Vision

A single place where students can:
- See everything they need for a class
- Understand what to work on first
- Study smarter with AI assistance
- Track progress over time
- Build mastery through adaptive flashcards
- Practice active recall through mini-quizzes
- Stay focused with Pomodoro or adaptive timing
- Get surprise quizzes to reinforce memory

This should feel helpful, not overwhelming — like a study buddy that actually knows what you need.

---

## Learning Techniques We Support

### 1. Pomodoro & Adaptive Timing
- Classic Pomodoro (25/5 cycles)
- Custom timing (user-defined)
- Adaptive timing based on fatigue or mastery
- Session logs for reflection

### 2. Active Recall Tools
- Fill-in-the-blank mini quizzes
- Quick “check yourself” questions
- Topic-based micro-assessments
- Surprise quizzes (4–5 random questions pulled from user topics)

### 3. Mastery-Based Flashcards
- AI-generated flashcards from notes
- Difficulty levels (easy → hard)
- Spaced repetition scheduling
- Mastery tracking per topic

### 4. Topic Detection & Organization
When users upload notes:
- AI identifies the subject (Bio, Chem, Math, etc.)
- Automatically organizes content
- Adds new concepts to memory
- Generates flashcards + quiz questions
- Tracks mastery per topic

This turns raw notes into structured learning material.

---

## User Stories

User stories follow the format:

**As a _student_, I want _X_, so I can _Y_.**

### Coursework & Assignments
- As a student, I want to see all assignments for a course, so I can plan my week.
- As a student, I want an assignment priority tracker, so I know what to work on first.
- As a student, I want to estimate the effort required for an assignment, so I can better manage my time.
- As a student, I want a dashboard showing upcoming deadlines, so I can avoid missing important assignments.

### Studying & Learning Tools
- As a student, I want AI-generated study guides, so I can review faster for my exam.
- As a student, I want AI-generated summaries, so I can study more effectively.
- As a student, I want flashcards that adapt to my mastery level, so I spend more time reviewing concepts I struggle with.
- As a student, I want to upload notes, so AI can create personalized study resources.
- As a student, I want fill-in-the-blank quizzes, so I can practice active recall.
- As a student, I want surprise quizzes, so I can reinforce memory without planning it.

### Focus & Productivity
- As a student, I want a study timer (Pomodoro or custom), so I can stay focused while studying.
- As a student, I want adaptive timing, so the app adjusts to my fatigue or mastery.
- As a student, I want to track my study sessions, so I can measure my progress over time.

### Mastery & Analytics
- As a student, I want the AI to analyze my study sessions by topic, so I know where I’m improving.
- As a student, I want mastery tracking, so I can see which subjects need more attention.

---

## 🛠 Feature Buckets (for future planning)

### Course Management
- Course list
- Assignment list
- Priority + effort estimation
- Deadline dashboard

### AI Tools
- Note parser
- Summary generator
- Study guide builder
- Flashcard generator
- Topic detection + organization

### Study Tools
- Pomodoro timer
- Adaptive timer
- Session tracker
- Active recall quizzes
- Surprise quizzes
- Mastery-based flashcards

### Analytics
- Study streaks
- Mastery progress
- Time spent per subject
- Topic-based performance

---

## Notes for the Team

This project is early-stage. The structure is intentionally simple right now:
- Clean frontend routing
- Basic backend endpoints
- Placeholder pages
- Space for AI integration later

As we build, keep things modular and readable. Small components. Clear naming. No over-engineering.

If something feels unclear, ask Andy — he’s building the vibe and direction.

---

## Next Steps (short-term)

- Finalize backend routes for assignments + notes
- Build flashcard model + mastery logic
- Add AI parsing + summary generation
- Create dashboard UI
- Add user authentication
- Build quiz engine (active recall + surprise mode)
- Add Pomodoro + adaptive timing

---

## Closing

This is the planning doc — not the code doc.  
It’s here to keep us aligned, inspired, and moving in the same direction.

Let’s build something genuinely helpful.
