const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from the React frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

// Parse incoming JSON request bodies
app.use(express.json());

// Basic API health check
app.get("/api/health", (req, res) => {
  res.json({ message: "Learnify API is running." });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

// Handle unexpected errors
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Learnify server running on port ${PORT}`);
});
