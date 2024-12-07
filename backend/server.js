import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

 

app.use(express.json());

app.use("/api/products", productRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))});
}
    

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);

});
// AAYDjwwsIW3y4l1g
// mongodb+srv://ayanogift:AAYDjwwsIW3y4l1g@cluster0.pyxtd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// npm install mongodb