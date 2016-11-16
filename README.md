# Kraft Recipes API for NodeJS
This is a work in progress library to wrap the Kraft Recipes API defined here: http://www.kraftfoods.com/ws/RecipeWS.asmx.

## To use
```javascript
var recipes = require("kraft-recipe-api")
```

## Searching for recipes
```javascript
recipes.search("mango chicken", function(err, results) {
  console.log(results);
});
```

## Get Recipe by ID
```javascript
recipes.getById(138284, function(err, result) {
  console.log(result);
});
```

## Search by Ingredients
Search by up to 3 Ingredients
```javascript
recipes.searchByIngredients("beef", "chilli", "cheese", function(err, results) {
  console.log(result);
}
```
