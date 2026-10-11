// STUDY ROUTES — /study

import express from 'express';
import { startStudySession } from '../controllers/studyController.js';

const router = express.Router();

router.post('/start', startStudySession);

export default router;
