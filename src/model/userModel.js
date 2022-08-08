import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const newUserSchema = new Schema({


    userName: String,
    passWord: String

});