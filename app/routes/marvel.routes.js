module.exports = (app) => {
  const marvel = require("../controllers/marvel.controller");

  var router = require("express").Router();

  router.get("/", marvel.findAll);

  app.use("/api/marvel", router);
};
