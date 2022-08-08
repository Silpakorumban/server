import mongoose from "mongoose";
import { newBookSchema } from "../model/bookModel.js";

const book = mongoose.model('book', newBookSchema)
    //  const user = mongoose.model('user', newUserSchema);

export const addNewBooks = (req, res) => {
    // JavaScript object containing the parse JSON
    //  console.log(req.body);
    var newBook = new book(req.body.bookItem)

    newBook.save((err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);
        console.log(`${book}`)
    });
}

export const getBook = (req, res) => {

    book.find({}, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);

    })
}


export const getBookById = (req, res) => {

    book.findById(req.params.bookId, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);

    })
}

export const updateBookById = (req, res) => {
    console.log(req.params.bookId);
    console.log(req.body.book);
    book.findOneAndUpdate({ _id: req.params.bookId }, req.body.book, { new: true, useFindAndModify: false }, (err, book) => {
        if (err) {
            res.send(err);
        }
        res.json(book);

    })
}

export const deleteBookById = (req, res) => {

    book.findByIdAndDelete({ _id: req.params.bookId }).then(() => {

        console.log("deleted")

        res.json({ message: "Deleted" });

    })

}