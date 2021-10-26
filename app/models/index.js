const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.URL, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("<--------Connected ------>");
  })
  .catch((err) => {
    console.log(err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.marvel = require("./marvel.model")(sequelize, Sequelize);
module.exports = db;
