module.exports = (sequelize, Sequelize) => {
  const Marvel = sequelize.define(
    "Marvels",
    {
      Character_name: {
        type: Sequelize.STRING,
      },
      Superpowers: {
        type: Sequelize.STRING,
      },
      Year_Created: {
        type: Sequelize.INTEGER,
      },
      Description: {
        type: Sequelize.STRING(1234),
      },
      How_he_got_his_Power: {
        type: Sequelize.STRING,
      },
      Weapons: {
        type: Sequelize.STRING,
      },
      Did_You_Know: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Marvel;
};
