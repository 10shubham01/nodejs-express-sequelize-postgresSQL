const { marvel } = require("../models");
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
    Weapons: req.body.Weapons,
    Did_You_Know: req.body.Did_You_Know,
  };
  Marvel.create(Character)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while Adding a character.",
      });
    });
};

exports.findAll = (req, res) => {
  const Character_name = req.query.Character_name;
  var condition = Character_name
    ? { Character_name: { [Op.like]: `%${Character_name}%` } }
    : null;
  Marvel.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving character.",
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;
  Marvel.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Character with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Character with id=" + id,
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  Marvel.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Character was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Character with id=${id}. Maybe Character was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Character with id=" + id,
      });
    });
};
