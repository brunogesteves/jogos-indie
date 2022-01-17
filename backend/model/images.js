const db = require("../db/db");

const images = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = `select * from images `;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
  set: function (nameFile) {
    return new Promise((resolve, reject) => {
      const query = `insert into images(name) values(?) `;
      db.query(query, [nameFile], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  del: function (id) {
    return new Promise((resolve, reject) => {
      const query = `delete from images where id = ? ;`;
      db.query(query, [id], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
};

module.exports = images;
