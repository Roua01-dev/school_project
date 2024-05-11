import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from './routes/UserRoute.js';
import CourRoute from'./routes/CourRoute.js';
import AuthRoute from'./routes/AuthRoute.js';
import SequelizeStore from "connect-session-sequelize"
import db from "./config/database.js"
import path from "path"
dotenv.config();

const app = express();

const sessionStore=SequelizeStore(session.Store);
const store =new sessionStore({
  db:db
})

import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// async()=>{
//     await db.sync();
// }

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/coursFiles', express.static(path.join(__dirname, 'coursFiles')));

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: { secure: "auto" },
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(CourRoute);
app.use(AuthRoute);
// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running");
});
