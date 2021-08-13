const chooseCategories = require("./model/category");

console.log("teste começa");
chooseCategories.fourMenus().then((result) => {
  console.log("resre: " + result);
  chooseCategories.changeFront(result);
});
