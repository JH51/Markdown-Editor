const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", 
  (req, res) => {
    console.log('serving index.html')
    res.sendFile(path.resolve(__dirname, '../index.html'));
  });

app.listen(3000, () => {});

module.exports = app;
