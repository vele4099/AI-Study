// ===============================================
// STUDY SESSION MODEL — Logs each study session
// ===============================================
// Tracks performance, time spent, and weak areas.

import mongoose from 'mongoose';

const studySessionSchema = new mongoose.Schema({
  userId: String,
  deckId: String,
  cardsReviewed: Number,
  correct: Number,
  incorrect: Number,
  duration: Number, // seconds
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('StudySession', studySessionSchema);
