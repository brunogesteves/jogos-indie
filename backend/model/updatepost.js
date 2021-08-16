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
    name,
    content,
    category,
    thumb,
    slug,
    slide,
    middle,
    gameplay,
    gallery,
    publicPost,
    id
  ) {
    return new Promise((resolve, reject) => {
      console.log(
        "res-model: ",
        name,
        content,
        category,
        thumb,
        slug,
        slide,
        middle,
        gameplay,
        gallery,
        publicPost,
        id
      );
      const query = `UPDATE posts SET name = ?, content = ?, category = ?, thumb = ?, slug = ?, slide = ?, middle = ?, gameplay = ?, gallery = ?, publicpost = ? where id = ? `;
      db.query(
        query,
        [
          name,
          content,
          category,
          thumb,
          slug,
          slide,
          middle,
          gameplay,
          gallery,
          publicPost,
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
