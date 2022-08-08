import mongoose from "mongoose";
import { newSignSchema } from "../model/signupModel.js";

const signup = mongoose.model("signup", newSignSchema);

export const addNewUser = (req, res) => {

    var newUSer = new signup(req.body);
    newUSer.save((err, signup) => {

        if (err) {
            res.send(err);
        }
        res.send(signup)

    })

}