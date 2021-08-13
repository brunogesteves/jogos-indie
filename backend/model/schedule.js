const db = require("../db/db");

const schedule = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = `SELECT date_format(schedule, "%d-%m-%Y %H:%i") as date from posts`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },  
};

module.exports = schedule;
