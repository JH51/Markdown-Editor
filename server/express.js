const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//   console.log("Serving bundle.html");
//   res.sendFile(path.resolve(__dirname, "../build/bundle.html"));
// });

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../build/bundle.html"));
});
app.use("/build", express.static(path.join(__dirname, "../build")));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports = app;
