var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "sql487.main-hosting.eu",
  user: "u354253299_jin",
  password: "Jop489@yu",
  database: "u354253299_jin",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
