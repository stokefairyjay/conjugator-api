"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const verb_1 = require("../controllers/verb");
const router = express_1.default.Router();
router.get('/:verb', verb_1.conjugate);
module.exports = router;
//# sourceMappingURL=api.js.map