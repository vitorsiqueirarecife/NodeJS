import express from "express";

const routes = express.Router();

routes.post("/", function (req, res) {
  res.json({
    message: "post news",
  });
});

routes.get("/", function (req, res) {
  res.json({
    message: "get news",
  });
});

export default routes