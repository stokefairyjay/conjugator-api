import express from 'express';

import { conjugate } from '../controllers/verb';

const router = express.Router();
router.get('/:verb', conjugate);

export = router;