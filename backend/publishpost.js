const newpost = require("./model/newpost");
var moment = require("moment");
var scheduleTime = moment().format("YYYY-MM-DD HH:mm");
newpost.getScheduleNow(scheduleTime + ":00").then((result) => {
  newpost.updateReleased(result[0].id);
  process.exit();
});
