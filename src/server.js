// Import libraries
import express from "express";
import cors from "cors"
import mongoose from "mongoose";


// Create an express app
const app = express();

// Connect to the database
await mongoose.connect(process.env.MONGO_URI);

// Use middlewares
app.use(express.json());
app.use(cors);

// Use routes


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
