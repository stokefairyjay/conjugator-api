"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const helper_1 = require("../controllers/helper");
const router = express_1.default.Router();
router.get('/health', helper_1.health);
module.exports = router;
//# sourceMappingURL=helper.js.map