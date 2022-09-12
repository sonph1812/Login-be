import bcrypt from 'bcrypt'
import {User} from "../model/user";
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from "../middleware/auth";
class AuthController {
    register = async (req, res) => {
        let user = req.body;
        user.password = await bcrypt.hash(user.password, 10);
        user = await User.create(user);
        res.status(201).json(user);
    }

    login = async (req, res) => {
        let loginForm = req.body;
        let user = await User.findOne({
            username: loginForm.username
        });
        if (!user) {
            res.set('Access-Control-Allow-Origin', 'http://localhost:4200');

            res.status(401).json({
                message: 'Username is not existed!'
            })
        } else {
            let comparePassword = await bcrypt.compare(loginForm.password, user.password);
            if (!comparePassword) {
                res.set('Access-Control-Allow-Origin', 'http://localhost:4200');

                res.status(401).json({
                    message: 'Password is wrong'
                })
            } else {
                let payload = {
                    username: user.username
                }
                let token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000
                });
                res.status(200).json({
                    token: token
                });
            }
        }
    }
}

export default new AuthController();
