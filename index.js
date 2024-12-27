const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

// Sync the database and handle errors
db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Database synchronized.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// CORS configuration
var corsOptions = {
  origin: "http://localhost:8081",  // Update this to the actual front-end domain if different
};
app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Simple route to check the server status
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shubham's application." });
});

// Uncomment the following line if you have your routes set up
// require("./app/routes/marvel.routes")(app);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Server setup with PORT from environment or default to 8081
const PORT = process.env.PORT || 8081;
console.log("Using port:", PORT);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
