module.exports = (app) => {
  const marvel = require("../controllers/marvel.controller");

  var router = require("express").Router();

  router.get("/", marvel.findAll);
  router.post("/", marvel.create);

  app.use("/api/marvel", router);
};
