const db = require("../db/db");

const posts = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = `select id, name, slide, middle, gameplay, gallery, publicpost from posts order by name asc`;
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
      const query = `select name, slug, thumb from posts where slide=1 and publicpost=1 limit 5`;
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
      const query = `select name, slug, thumb from posts where middle=1 and publicpost=1 limit 2`;
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
      const query = `select name, slug, thumb from posts where gameplay=1 and publicpost=1 limit 5`;
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
      const query = `select name, slug, thumb from posts where gallery=1 and publicpost=1 limit 5`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getSearch: function (word) {
    return new Promise((resolve, reject) => {
      const query = `SELECT name, category, slug, category, images 
                     FROM posts
                     WHERE name LIKE "%${word}%"
                     OR content LIKE "%${word}%"
                     OR category LIKE "%${word}%"`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  // random: function () {
  //   posts.getLastId()
  //     .then(lastId =>{
  //       let randIds= []
  //       for( let x=0; x < 2; x++ ){
  //         randIds[x] = Math.floor(Math.random() * lastId) + 1
  //       }
  //       return new Promise((resolve, reject) => {
  //         const query = `select id, images, slug from posts
  //                     where id in (${randIds.join(",")})` ;
  //         db.query(query, (er, res) => {
  //           if (er) {
  //             reject("erro no banco, tentar novamente");
  //           } else {
  //             resolve(res);
  //           }
  //         });
  //       });
  //     })
  //   },

  // getLastId: function () {
  //   return new Promise((resolve, reject) => {
  //     const query = `select id from posts where publicpost = 1 order by id desc Limit 1 ` ;
  //     db.query(query, (er, res) => {
  //       if (er) {
  //         reject("erro no banco, tentar novamente");
  //       } else {
  //         resolve(res[0].id);
  //       }
  //     });
  //   });
  // },

  random: function () {
    return new Promise((resolve, reject) => {
      const query = `select id, images, slug from posts where publicpost = 1 order by Rand() limit 3`;
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
      const query = `delete from posts where id= ?`;
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
      const query = `update posts set ${place}=${option} where id = ${id} `;
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
