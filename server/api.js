const express = require("express");
const api = express.Router();
const apiController = require("./controllers/apiController.js");

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.get(
  "/",
  // (req, res, next) => {
  //   console.log('Request Made to /api');
  //   console.log(req.body);
  //   return next();
  // },
  apiController.getReadMe,
  (req, res) => {
    res
      .status(200)
      .header("content-type", "plain/text")
      .header("Access-Control-Allow-Origin", "*");
    res.send(res.locals.mdText);
    return;
  }
);

module.exports = api;
