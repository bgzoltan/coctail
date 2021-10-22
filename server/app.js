const express = require("express");
const fs = require("fs");
var cors = require("cors");

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
  res.send("hello Client");
});

app.listen(port, () => {
  console.log(`Random Coctail is listening on: http://localhost:${port}`);
});
