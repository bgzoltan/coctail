const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Random Coctail server");
});

app.get("/coctail", function (req, res) {
  console.log("***************************************");
  console.log("**** Request for a Random Coctail ");
  console.log("***************************************");
  let data = [];
  async function loadAPIData() {
    const promise = await axios.get(
      `http://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    if (promise.status === 200) {
      data = promise.data;
      res.json(data);
    } else {
      res.status(404).send("Not found");
    }
  }
  loadAPIData();
});

app.post("/coctail", function (req, res) {
  console.log("***************************************");
  console.log("***** Search for a specified Coctail");
  console.log("***************************************");
  let data = [];
  async function loadAPIData() {
    const promise = await axios.get(
      `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.search}`
    );

    if (promise.status === 200 && promise.data.drinks !== null) {
      data = promise.data;
      res.json(data);
    } else {
      res.status(404).send("Not found");
    }
  }
  loadAPIData();
});

app.listen(port, () => {
  console.log(`Random Coctail is listening on: http://localhost:${port}`);
});
