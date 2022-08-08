import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const newSignSchema = new Schema({


    firstName: String,
    lastName: String,
    passWord: String,
    address: String,
    email: String,
    phoneNumber: String



});