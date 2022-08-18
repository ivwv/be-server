#!/usr/bin/env node

const Express = require("./lib/Express");
const path = require("path");
const fs = require("fs");

try {
  const targetPath = path.join(process.cwd(), process.argv[2]);
  const targetPort = process.argv[3];
  console.log(targetPath);
  // console.log(process.cwd(), "./");
  const express = new Express(targetPath, targetPort);
} catch (error) {
  console.log(`---------参数错误---------
请输入路径(必选)
端口号(可选)
Example: 
$ be-server ./ 1234
---------参数错误---------
  `);
}
