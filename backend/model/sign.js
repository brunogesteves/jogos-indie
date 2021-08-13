const db = require("../db/db");

const menu = {
  getUser: function (user) {
    return new Promise((resolve, reject) => {
      const query = `select password as pass, name, id from users where name = "${user}"`;
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

module.exports = menu;
