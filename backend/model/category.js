const db = require("../db/db");

const category = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = "select name from Cats ORDER BY name asc";
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
  set: function (name) {
    return new Promise((resolve, reject) => {
      const query = `insert into Cats (name) values (?)`;
      db.query(query, [name], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
  del: function (name) {
    return new Promise((resolve, reject) => {
      const query = `delete from Cats where name= ?`;
      db.query(query, [name], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  fourMenus: function () {
    return new Promise((resolve, reject) => {
      const query = `select name from Cats order by Rand() limit 4`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  resetFront: function () {
    return new Promise((resolve, reject) => {
      const query = `update Cats set front = 0 where front = 1 `;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  changeFront: async function (result) {
    await this.resetFront();
    const menu1 = result[0].name;
    const menu2 = result[1].name;
    const menu3 = result[2].name;
    const menu4 = result[3].name;
    return new Promise((resolve, reject) => {
      const query = `update Cats set front = 1 where name in ("${menu1}", "${menu2}", "${menu3}", "${menu4}") `;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getFront: function () {
    return new Promise((resolve, reject) => {
      const query = `select name from Cats where front = 1 `;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  getPostsData: function (cat) {
    return new Promise((resolve, reject) => {
      const query = `select name, images, slug from posts where category = ? limit 4`;
      db.query(query, [cat], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },

  random: async function () {
    const categories = await category.getFront();
    let catposts = categories.map((cat) => {
      return category.getPostsData(cat.name);
    });
    return Promise.all(catposts).then((results) => {
      let ret = [];
      for (let i = 0; i < results.length; i++) {
        const name = categories[i].name;
        const posts = results[i];
        ret.push({
          name,
          posts,
        });
      }
      return ret;
    });
  },

  category: function (category) {
    return new Promise((resolve, reject) => {
      const query =
        "select name, images, slug from posts  where category = ? ORDER BY name asc";
      db.query(query, [category], (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
};

module.exports = category;
