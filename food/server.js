const express = require("express");
const app = express();
const request = require("request");
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules ")));
app.get("/sanity", function (req, res) {
  res.send("ok");
});

let arringredient = "";
app.get("/recipes/:ingredient", function (req, res) {
    const ingredient = req.params.ingredient;
    request(
        `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,
        function (err, response, body) {
          const data = JSON.parse(body);
          arringredient = data.results;
          let food = arringredient.map((a) => {
            return {
              ingredients: a.ingredients,
              title: a.title,
              img: a.thumbnail,
        
              href: a.href,
            };
          });  
          
  res.send({ items: food });
        }
        
      );

});

const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
