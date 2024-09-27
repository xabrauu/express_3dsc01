const express = require("express");
const app = express();

const PORT = 3301;

app.get("/", function (req, res) {
  res.send("Olá!....");
});

app.listen(PORT, () => {
  console.log("running...");
});
