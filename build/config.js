"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env;
exports.default = {
    port: Number(env.PORT || 1078),
    host: env.HOST || 'localhost',
    isDev: env.NODE_ENV !== 'production'
};
//# sourceMappingURL=config.js.map