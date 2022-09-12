"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            user = await user_1.User.create(user);
            res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let loginForm = req.body;
            let user = await user_1.User.findOne({
                username: loginForm.username
            });
            if (!user) {
                res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
                res.status(401).json({
                    message: 'Username is not existed!'
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(loginForm.password, user.password);
                if (!comparePassword) {
                    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
                    res.status(401).json({
                        message: 'Password is wrong'
                    });
                }
                else {
                    let payload = {
                        username: user.username
                    };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET_KEY, {
                        expiresIn: 36000
                    });
                    res.status(200).json({
                        token: token
                    });
                }
            }
        };
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth-controller.js.map