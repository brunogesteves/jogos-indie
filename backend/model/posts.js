const db = require("../db/db");

const posts = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = `select id, name, slide, middle, gameplay, gallery, public from Post order by name asc`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getSlide: function () {
    return new Promise((resolve, reject) => {
      const query = `select name, slug, thumb from Post where slide=1 and public=0 limit 5`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getMiddle: function () {
    return new Promise((resolve, reject) => {
      const query = `select name, slug, thumb from Post where middle=1 and public=0 limit 2`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getGameplay: function () {
    return new Promise((resolve, reject) => {
      // console.log("model-chamou: ");

      const query = `select name, slug, thumb from Post where gameplay=1 and public=0 limit 5`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getGallery: function () {
    return new Promise((resolve, reject) => {
      const query = `select name, slug, thumb from Post where gallery=1 and public=0 limit 5`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getSearch: function (searchword) {
    return new Promise((resolve, reject) => {
      const query = `SELECT name, category, slug, thumb
                     FROM Post
                     WHERE name LIKE "%${searchword}%"
                     OR category LIKE "%${searchword}%"`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getCategory: function (categoryName) {
    return new Promise((resolve, reject) => {
      const query = `SELECT slug, thumb from Post WHERE category = ?`;
      db.query(query, [categoryName], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  random: function () {
    return new Promise((resolve, reject) => {
      const query = `select id, images, slug from Post where publicpost = 1 order by Rand() limit 3`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  del: function (postId) {
    return new Promise((resolve, reject) => {
      const query = `delete from Post where id= ?`;
      db.query(query, [postId], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  update: function (place, option, id) {
    return new Promise((resolve, reject) => {
      const query = `update Post set ${place}=${option} where id = ${id} `;
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
module.exports = posts;
