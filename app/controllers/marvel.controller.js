const db = require("../models");
const Marvel = db.marvel;

module.exports = {
  create: (req, res) => {
    if (!req.body.Character_name) {
      res.status(400).send({
        message: "Empty !!",
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
          message:
            err.message || "Some error occurred while Adding a character.",
        });
      });
  },
  findAll: (req, res) => {
    Marvel.findAll({ where: "" })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  },

  findOne: (req, res) => {
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
  },
  update: (req, res) => {
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
            message: `Cannot update Character with id=${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Character with id=" + id,
        });
      });
  },

  delete: (req, res) => {
    const id = req.params.id;

    Marvel.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Character was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Character with id=${id}. Maybe Character was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Character with id=" + id,
        });
      });
  },
  deleteAll: (req, res) => {
    Marvel.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Characters were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Characters.",
        });
      });
  },
};
