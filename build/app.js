"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const compression_1 = __importDefault(require("compression"));
const helper_1 = __importDefault(require("./routes/helper"));
const api_1 = __importDefault(require("./routes/api"));
const app = express_1.default();
const port = config_1.default.port;
app.use(compression_1.default());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.status(200).json();
    }
    next();
});
app.use('/helper', helper_1.default);
app.use('/api', api_1.default);
app.use((req, res, next) => {
    res.status(404).send(`${req.url} is not a valid resource here`);
});
app.use((err, req, res, next) => {
    console.trace();
    res.status(500).json('Internal server error');
});
process.on('uncaughtException', (err) => {
    console.trace();
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.trace();
    console.log(reason.message);
});
app.set('port', port);
exports.default = app;
//# sourceMappingURL=app.js.map