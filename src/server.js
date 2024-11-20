import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";
import coursesRouter from "./routes/courses.js";
import enrollRouter from "./routes/enroll.js";
import modulesRouter from "./routes/modules.js";
// Initialize Express app
const app = express();

// Connect to database
await mongoose.connect(process.env.MONGO_URI);
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(usersRouter);
app.use(coursesRouter);
app.use(enrollRouter);
app.use(modulesRouter);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
