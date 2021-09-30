import express from "express";
import { IsAllowedAccess } from "../middleware/auth";

import { conjugate } from "../controllers/verb";

const router = express.Router();
router.get("/:verb", IsAllowedAccess, conjugate);

export = router;
