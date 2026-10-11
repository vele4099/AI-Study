// ===============================================
// NOTE MODEL — Raw user notes
// ===============================================
// Notes can be typed, pasted, or extracted from PDFs.
// These notes feed into AI to generate study material.

import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  userId: String,
  subjectId: String,
  content: String, // raw text
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Note', noteSchema);
