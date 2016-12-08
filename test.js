var recipes = require("./index.js");

var testSearch = function() {
  recipes.search("bbq pork", function(err, res) {
    console.log("Search results...");
    console.log(res);
  });
};

var testGetById = function() {
  recipes.getById(138284, function(err, res) {
    console.log("Get By ID...");
    console.log(err);
    console.log(res);
  });
};

var testSearchByIngredients = function() {
  recipes.searchByIngredients("beef", "chilli", "cheese", function(err, res) {
    console.log(err);
    console.log(res);
  });
};

var testGetCategories = function() {
  recipes.getCategories(function(err, res) {
    console.log(err);
    console.log(res);
  })
};

var testGetByCategoryName = function() {
  recipes.getByCategoryName("Type", "Mains", function(err, res) {
    console.log(err);
    console.log(res);
  })
};

var testGetByCategoryId = function() {
  recipes.getByCategoryId(11, 97, function(err, res) {
    console.log(err);
    console.log(res);
  })
};

var testTopTenRecipes = function() {
  recipes.getTopTenRecipes(function(err, res) {
    console.log(err);
    console.log(res);
  })
};


testTopTenRecipes();
