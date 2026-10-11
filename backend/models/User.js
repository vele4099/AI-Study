// ===============================================
// USER MODEL — Authentication + Profile
// ===============================================
// Stores user credentials, profile info, and settings.

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
