module.exports = {
  POSTGRES_URL:
    "postgres://ycntzthg:6mgeFGGoEp1SzISPk7lTPAjZSe8KAPHl@satao.db.elephantsql.com/ycntzthg",
  HOST: "localhost",
  dialect: "pg",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
