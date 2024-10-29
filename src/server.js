// Import libraries
import express from "express";

// Create an express app
const app = express();


// Use middlewares
app.use(express.json());

// Use routes


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
