const db = require("../db/db");

const updatepost = {
  get: function (id) {
    return new Promise((resolve, reject) => {
      const query = `select name, content, category, thumb, slide, middle, gameplay, gallery, publicpost from posts where id = ?`;
      db.query(query, [id], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
  update: function (
    id,
    name,
    content,
    category,
    thumb,
    slide,
    middle,
    gameplay,
    gallery,
    publicpost
  ) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE posts SET name = ?, content = ?, thumb = ?, slide = ?, middle = ?, gameplay = ?, gallery= ?, publicpost = ?, slug = ? where id= ? `;
      db.query(
        query,
        [
          name,
          content,
          category,
          thumb,
          slide,
          middle,
          gameplay,
          gallery,
          publicpost,
          id,
        ],
        (er, res) => {
          if (er) {
            reject("erro no banco, tentar novamente");
          } else {
            resolve(res);
          }
        }
      );
    });
  },
};

module.exports = updatepost;
