module.exports = (app) => {
  const marvel = require("../controllers/marvel.controller");
  const router = require("express").Router();
  router.post("/", marvel.create);
  router.get("/:id", marvel.findOne);
  router.get("/", marvel.findAll);
  router.put("/:id", marvel.update);
  router.delete("/:id", marvel.delete);
  router.delete("/", marvel.deleteAll);
  app.use("/api/marvel", router);
};
