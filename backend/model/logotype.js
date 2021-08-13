const db = require("../db/db")

const menu = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = 'select imagem from images id = 1';
      db.query(query, (er, res) => {
        if(er) {
          reject("erro no banco, tentar novamente")
        }else {
          resolve(res);
        }
      });
    });
  },
  set: function (file) {
    return new Promise((resolve, reject) => {
      const query = `insert into images (imagem) values ${file}`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente")
        }else{
          resolve(res);
        }
      });
    });
  },
  del: function(file){
    return new Promise((resolve,reject) => {
    const query = `delete from images where id = 1`;
    db.query(query, (er, res) => {
      if (er) {
        reject("erro no banco, tentar novamente")
      }else{
        resolve(res)
      }
    });
  });
  },
}

module.exports = menu;