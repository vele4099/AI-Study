// ===============================================
// SUBJECT MODEL — Predefined + Custom Subjects
// ===============================================
// Example: Math, Biology, Chemistry, etc.
// Users can also create custom subjects.

import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: String,
  userId: String, // null for global subjects
});

export default mongoose.model('Subject', subjectSchema);
