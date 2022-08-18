const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");

const paths = ["i1.html", "i2.html", "i3.html", "i4.html"];

for (let i = 0; i < paths.length; i++) {
  app.get(`/${paths[i]}`, (req, res) => {
    res.sendFile(path.join(__dirname, paths[i]));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
