const db = require("../models");
const Marvel = db.marvel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.Character_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const Character = {
    Character_name: req.body.Character_name,
    Actor_name: req.body.Actor_name,
    description: req.body.description,
    Power: req.body.Power,
  };
  Marvel.create(Character)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Marvel.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
