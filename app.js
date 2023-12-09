import express from 'express';
import session from "express-session";
import mongoose from "mongoose";
import FollowsRoutes from "./follows/routes.js";
import cors from "cors";
import UserRoutes from "./users/routes.js";

const MONGOOSE_STRING = process.env.MONGOOSE_STRING || 'mongodb+srv://drdmitre:200ad300ap@davidcluster.fa8cx1t.mongodb.net/WEBDEVPROJECTREMOTE?retryWrites=true&w=majority'; //change todo
console.log(MONGOOSE_STRING);
mongoose.connect(MONGOOSE_STRING);
const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'; //change todo


app.use(
    cors({
      credentials: true,
      origin: FRONTEND_URL
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
}; //todo double check sessions options
const node_env = process.env.NODE_ENV || "development";
if (node_env !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
} 
app.use(session(sessionOptions));

app.use(express.json());



app.get('/', (req, res) => {res.send('Server')})

FollowsRoutes(app);
UserRoutes(app);

app.listen(4000);