var express = require("express");
const cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const category = require("./routes/category");
const sign = require("./routes/sign");
const posts = require("./routes/posts");
const newpost = require("./routes/newpost");
const updatepost = require("./routes/updatepost");
const images = require("./routes/images");
const frontpage = require("./routes/frontpage");
const schedule = require("./routes/schedule");
const resetpassword = require("./routes/resetpassword");

app.use(cors());
app.use(fileUpload());

app.use(bodyParser.json());

app.use("/category", category);
app.use("/sign", sign);
app.use("/posts", posts);
app.use("/newpost", newpost);
app.use("/updatepost/", updatepost);
app.use("/images/", images);
app.use("/frontpage/", frontpage);
app.use("/schedule/", schedule);
app.use("/resetpassword/", resetpassword);

let port = 3001;
app.listen(port, function () {
  console.log(`Servidor iniciado na porta ${port}` | "erro na conexao");
});
