const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shubham application." });
});
require("./app/routes/marvel.routes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
