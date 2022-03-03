var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.json({
    message: "AWS service working!",
  });
});

app.listen(3333);
