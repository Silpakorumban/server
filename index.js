import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/routes.js";



const app = express();

// body parser

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// cors 
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
routes(app);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/librarydbs", { useNewUrlParser: true, useUnifiedTopology: true })




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`your server is running on ${PORT} `)
});