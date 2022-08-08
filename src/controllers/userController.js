import mongoose from "mongoose";
import { newUserSchema } from "../model/userModel.js";
const user = mongoose.model('user', newUserSchema);
import jwt from "jsonwebtoken";

export const loginuser = (req, res) => {
        const username1 = 'admin@gmail.com';
        const password1 = '1234567';
        var userData = new user(req.body.user)
        console.log(req.body);
        console.log(username1)
        console.log(password1)
        console.log(userData.userName);
        console.log(req.body.user.passWord);
        userData.save((err, user) => {



            if (username1 !== userData.userName) {
                res.status(401).send('Invalid Username')
            } else
            if (password1 !== userData.passWord) {
                res.status(401).send('Invalid Password')
            } else {

                let payload = { subject: userData.userName + userData.passWord }
                let token = jwt.sign(payload, 'secretkey');
                res.status(200).json({ idToken: token });
                console.log(token);
                console.log(`${user}`)
            }


        });
    }
    // export const verifyToken = (req, res, next) => {
    //         if (!req.headers.authorization) {
    //             return res.status(401).send('Unauthorised request')
    //         }
    //         let token = req.headers.authorization.split('')[1];
    //         if (token == 'null') {
    //             return res.status(401).send('Unauthorised request')
    //         }
    //         let payload = jwt.verify(token, 'secretkey')
    //         console.log(payload)
    //         if (!payload) {
    //             return res.status(401).send('Unauthorised request')
    //         }
    //         req.userId = payload.subject
    //         next()
    //     }
export const verifyToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(401).send('Unauthorised request')
    }
    let token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (token == 'null') {
        return res.status(401).send('Unauthorised request')
    }
    let payload = jwt.verify(token, 'secretkey')
    console.log(payload);
    if (!payload) {
        return res.status(401).send('Unauthorised request')
    }
    req.userId = payload.subject;
    next();
}