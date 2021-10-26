module.exports = (app) => {
  const marvel = require("../controllers/marvel.controller");
  var router = require("express").Router();
  router.get("/", marvel.findAll);
  router.post("/", marvel.create);
  router.get("/:id", marvel.findOne);
  app.use("/api/marvel", router);
};
