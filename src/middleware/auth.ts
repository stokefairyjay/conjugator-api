import express = require("express");
export const IsAllowedAccess = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    // example but call auth provider would happen here

    next();
};
