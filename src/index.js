import dns from "dns";
import monggose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({
    path: "./.env"
});
connectDB()

























/*const PORT = process.env.PORT || 8000;


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!!!", err);
    });*/