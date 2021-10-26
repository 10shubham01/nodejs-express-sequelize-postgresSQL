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
    Superpowers: req.body.Superpowers,
    Description: req.body.Description,
    Year_Created: req.body.Year_Created,
    How_he_got_his_Power: req.body.How_he_got_his_Power,
    Weapons: req.body.Power,
    Did_You_Know: req.body.Power,
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
  const title = req.query.Character_name;
  var condition = Character_name
    ? { titlCharacter_namee: { [Op.like]: `%${title}%` } }
    : null;
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
