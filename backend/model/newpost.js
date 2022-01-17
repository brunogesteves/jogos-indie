const db = require("../db/db");

const newpost = {
  get: function () {
    return new Promise((resolve, reject) => {
      const query = `select name from posts`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
  set: function (
    name,
    content,
    category,
    thumb,
    slug,
    schedule,
    datetime,
    slide,
    middle,
    gameplay,
    gallery,
    publicpost
  ) {
    return new Promise((resolve, reject) => {
      const query = `insert into posts(name, content, category, thumb, slug, schedule, datetime, slide, middle, gameplay, gallery, publicpost) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `;
      db.query(
        query,
        [
          name,
          content,
          category,
          thumb,
          slug,
          schedule,
          datetime,
          slide,
          middle,
          gameplay,
          gallery,
          publicpost,
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
  getScheduleNow: function (scheduleTime) {
    return new Promise((resolve, reject) => {
      const query = `select id from posts where schedule = "${scheduleTime}"`;
      // const query = `select id from posts`;
      db.query(query, (er, res) => {
        if (er) {
          reject("erro no banco, tentar novamente");
        } else {
          resolve(res);
        }
      });
    });
  },
  updateReleased: function (id) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE posts SET released = 1 where id = ? `;
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

module.exports = newpost;
