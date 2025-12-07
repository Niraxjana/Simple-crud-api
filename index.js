import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//middleware
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(3000, () => {
      console.log("🚀 Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });




app.use(express.static("public"));

//routes
app.use("/api/products", productRoute);




app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});




