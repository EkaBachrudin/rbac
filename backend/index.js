import  express  from "express";
import cors from "cors";
import session from "express-session";
// import db from "./config/Database.js"
import dotenv from "dotenv";
import UserRoute from "./route/UserRoute.js"
import ProductRoute from "./route/ProductRoute.js"

dotenv.config();

const app = express();

// (async()=>{
//    await db.sync(); 
// })()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto',
        

    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server up end running...");
}); 
