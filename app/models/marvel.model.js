module.exports = (sequelize, Sequelize) => {
  const Marvel = sequelize.define(
    "Marvels",
    {
      Character_name: {
        type: Sequelize.STRING,
      },
      Actor_name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      Power: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Marvel;
};
