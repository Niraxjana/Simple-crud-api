import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';
const app = express();
//middleware
app.use(express.json());

mongoose.connect(
  "mongodb+srv://niranjanauser:admin2005@backenddb.nyxloo5.mongodb.net/BackendDb"
)
.then(() => {
  console.log("Connected to MongoDB");

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


//routes
app.use("/api/products", productRoute);




app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});




