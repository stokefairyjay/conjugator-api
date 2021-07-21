import express from 'express';

import { health } from '../controllers/helper';

const router = express.Router();
router.get('/health', health);

export = router;