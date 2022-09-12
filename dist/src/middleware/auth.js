"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET_KEY = '200699';
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'You are anonymous'
            });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous'
                    });
                }
                else {
                    req.decoded = data;
                    next();
                }
            });
        }
    }
    else {
        res.status(401).json({
            message: 'You are anonymous'
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map