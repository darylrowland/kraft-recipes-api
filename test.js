var recipes = require("./index.js");

// Test search
recipes.search("bbq pork", function(err, res) {
  console.log(res);
})
