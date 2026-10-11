// ===============================================
// CARD MODEL — Individual study items
// ===============================================
// Supports spaced repetition fields.

import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  deckId: String,
  prompt: String,
  answer: String,
  difficulty: Number, // adaptive difficulty
  lastReviewed: Date,
  nextReview: Date,
});

export default mongoose.model('Card', cardSchema);
