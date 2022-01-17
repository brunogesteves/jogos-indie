const db = require("../db/db");

const frontpage = {
  get: function (slug) {
    return new Promise((resolve, reject) => {
      const query = `select content, publicpost, id from posts where slug=?`;
      db.query(query, [slug], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
};

module.exports = frontpage;
