import dns from "dns";
import monggose from "mongoose";
import connectDB from "./db/index.js";
import app from "./app.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8000;

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({
    path: "./.env"
});
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!!!", err);
    });
