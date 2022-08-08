import { addNewBooks, getBook, getBookById, updateBookById, deleteBookById } from "../controllers/bookController.js";
import { loginuser, verifyToken } from "../controllers/userController.js";
import { addNewUser } from "../controllers/signupController.js";
const routes = (app) => {

    app.route('/books')
        .get((req, res, next) => {

            // middleware
            console.log(`request from: ${req.originalUrl}`);
            console.log(`request type:${req.method}`)
            next();
        }, (getBook))

    .post(verifyToken, addNewBooks);
    app.route('/book/:bookId')

    .get(getBookById)

    .put(verifyToken, updateBookById)

    .delete(verifyToken, deleteBookById);

    app.route("/login")
        .post(loginuser);

    app.route("/signUp")
        .post(addNewUser);



}
export default routes;