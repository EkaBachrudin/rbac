import  express  from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js"
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./route/UserRoute.js"
import ProductRoute from "./route/ProductRoute.js"
import AuthRoute from "./route/AuthRoute.js"

dotenv.config();

const app = express();

const sessionStore =  SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})


    // (async()=>{
    //    await db.sync(); 
    // })()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
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
app.use(AuthRoute);
// store.sync();
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server up end running...");
});