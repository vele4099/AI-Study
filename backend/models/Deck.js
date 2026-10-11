// ===============================================
// DECK MODEL — Group of cards
// ===============================================
// Decks are generated from notes or created manually.

import mongoose from 'mongoose';

const deckSchema = new mongoose.Schema({
  userId: String,
  subjectId: String,
  title: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Deck', deckSchema);
