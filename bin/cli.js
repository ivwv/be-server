#!/usr/bin/env node
const Options = require("./lib/Options");
// import Options from "./lib/Options";
const inquirer = require("inquirer");
// const fs = require("fs");
// const path = require("path");
const { options } = new Options();
console.log(options);
inquirer.prompt(options).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
