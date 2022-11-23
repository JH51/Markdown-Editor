const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const apiRouter = require("./api.js");
const { default: axios } = require("axios");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
const SERVER_URL = "http://127.0.0.1:" + PORT;

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../build/bundle.html"));
});
app.use("/build", express.static(path.join(__dirname, "../build")));
app.use("/api", apiRouter);
app.get("/login/oauth/github", (req, res) => {
  console.log("OAuth1");
  res.header("Access-Control-Allow-Origin", "*");
  console.log("OAuth2");
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=31454bd3dc477f096177`
  );
  console.log("OAuth3");
});
app.get("/login/oauth/github/success", (req, res) => {
  axios
    .post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: "31454bd3dc477f096177",
        client_secret: "008e6ce5f2958e9bfcb10c9ca8594e43cbc0fb41",
        code: req.query.code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((result) => {
      console.log(result.data.access_token);
      res.send("you are authorized " + result.data.access_token);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports = { app, SERVER_URL };
