const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const apiRouter = require("./api.js");

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
  res.header("Access-Control-Allow-Origin", "*")
  res.redirect(`https://github.com/login/oauth/authorize?client_id=31454bd3dc477f096177`);
})


app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports = { app, SERVER_URL };
