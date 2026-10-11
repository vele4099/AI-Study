// DECK ROUTES — /decks

import express from 'express';
import { getDecks } from '../controllers/deckController.js';

const router = express.Router();

router.get('/', getDecks);

export default router;
