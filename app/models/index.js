require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL, {
  host: "postgresql",
  operatorsAliases: 0,
  dialect: "postgres",
   dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
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
