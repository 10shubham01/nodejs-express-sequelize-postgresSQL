/*----------------------------------------------Establishing connection with Database--------------------------------- */
var pg = require("pg");
const dbConfig = require("../Config/db.config");

var conString = dbConfig.POSTGRES_URL;
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
});
module.exports = client;
