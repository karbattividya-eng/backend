import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser"
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  Credential:true
}))
app.use(express.json({limit:"16kb"}));// user ch data yeda limit parnat store jal pahjie 
app.use(express.urlencoded({extended:true,limit:"16kb"}));//user ch data yeda limit parnat store jal pahjie url store hota asataya
app.use(express.static("public"))//file and folder save  hota public assetas
app.use(cookieparser())
//middleware process karaych ahe aata ek person ahe to login ch ani kela anni website la jata ahe tar to check karto ki ha baba to login kela ahe kay anni kela asla tar ch to java nahi tar nahi

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

export default app;



















































/*import express from "express";
import { DB_NAME } from "./constants.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

export default app;*/