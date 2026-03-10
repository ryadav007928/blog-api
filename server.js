require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const blogRoutes = require("./routes/blog.routes");

const app = express();

// middleware
app.use(express.json());

// database connection
connectDB();

// test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blog API is running",
  });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});