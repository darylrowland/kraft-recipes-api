var recipes = require("./index.js");

recipes.search("bbq pork", function(err, res) {
  console.log("Search results...");
  console.log(res);

  recipes.getById(138284, function(err, res) {
    console.log("Get By ID...");
    console.log(err);
    console.log(res);
  });

});
