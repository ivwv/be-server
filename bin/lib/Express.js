

module.exports = class Express {
  constructor(path = process.cwd(), port = 1234) {
    this.path = path;
    this.port = port;
    this.init();
  }
  init() {
    this.startServer();
  }
  startServer() {
    const express = require("express");
    const app = express();
    app.use(express.static(this.path));
    app.listen(this.port, () => {
      console.log(`server is running at http://localhost:${this.port}`);
    });
  }
};
