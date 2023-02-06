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
  //   console.log('PARAMS:',req.query);
  //   return next();
  // },
  apiController.getReadMe,
  (req, res) => {
    const { user, repo, branch, filename, url, mdText } = res.locals;
    console.log(user,repo,branch,filename,url);
    res
      .status(200)
      .header("content-type", "plain/text")
      .header("Access-Control-Allow-Origin", "*")
      .json({ user, repo, branch, filename, mdText });
    return;
  }
);

module.exports = api;
