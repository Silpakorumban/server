import { addNewBooks, getBook, getBookById, updateBookById, deleteBookById } from "../controllers/bookController.js";
import { loginuser, verifyToken } from "../controllers/userController.js";
import { addNewUser } from "../controllers/signupController.js";
import path from "path";
const routes = (app) => {



    app.route("api/books")
        .get((req, res, next) => {

            // middleware
            console.log(`request from: ${req.originalUrl}`);
            console.log(`request type:${req.method}`)
            next();
        }, (getBook))

    .post(verifyToken, addNewBooks);
    app.route("/api/book/:bookId")

    .get(getBookById)

    .put(verifyToken, updateBookById)

    .delete(verifyToken, deleteBookById);

    app.route("/api/login")
        .post(loginuser);

    app.route("/api/signUp")
        .post(addNewUser);



}
export default routes;