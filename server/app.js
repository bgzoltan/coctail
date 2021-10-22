const express = require("express");
const fs = require("fs");
var cors = require("cors");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Random Coctail server");
});

app.post("/postCoctail", function (req, res) {
  console.log("Post to Coctail ***********");
  res.send("hello Client");
});

app.get("/coctail", function (req, res) {
  console.log("Request for Coctail -------------");
  let data = [];
  async function loadAPIData() {
    const promise = await axios.get(
      `http://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const status = promise.status;

    if (status === 200) {
      console.log("API DATA //////////////////", promise.data);
      data = promise.data;
      res.json(data);
    } else {
      console.log("API PROBLEM !!!!!!!!!!!!!!!!!!!!!!!!");
      res.status(404);
    }
  }
  loadAPIData();
});

app.post("/coctail", function (req, res) {
  console.log("Searc for Coctail -------------");
  let data = [];
  async function loadAPIData() {
    const promise = await axios.get(
      `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    );
    const status = promise.status;

    if (status === 200) {
      console.log("SEARCH API DATA //////////////////", promise.data);
      data = promise.data;
      res.json(data);
    } else {
      console.log("API PROBLEM !!!!!!!!!!!!!!!!!!!!!!!!");
      res.status(404);
    }
  }
  loadAPIData();
});

app.listen(port, () => {
  console.log(`Random Coctail is listening on: http://localhost:${port}`);
});
