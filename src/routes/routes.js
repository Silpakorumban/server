import { addNewBooks, getBook, getBookById, updateBookById, deleteBookById } from "../controllers/bookController.js";
import { loginuser, verifyToken } from "../controllers/userController.js";
import { addNewUser } from "../controllers/signupController.js";
import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(
//     import.meta.url);

// const __dirname = path.dirname(__filename);
const routes = (app) => {


    app.route('/*')

    app.get((req, res) => { res.sendFile(path.join(__dirname + '/dist/library-app/index.html')); });

    app.route("/api/books")
        .get((req, res, next) => {

            // middleware
            console.log(`request from: ${req.originalUrl}`);
            console.log(`request type:${req.method}`)
            next();
        }, (getBook))
        .post(verifyToken, addNewBooks);
    app.route("/api/books/:bookId")

    .get(getBookById)

    .put(verifyToken, updateBookById)

    .delete(verifyToken, deleteBookById);

    app.route("/api/login")
        .post(loginuser);

    app.route("/api/signUp")
        .post(addNewUser);



}
export default routes;