import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const newBookSchema = new Schema({

    title: String,
    author: String,
    about: String,
    imageUrl: String

});