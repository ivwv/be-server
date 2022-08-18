/**
 * 用于获取cli执行的当前路径
 * 获取cli执行路径下的所有文件名
 * @returns {string}
 */

const fs = require("fs");
const path = require("path");

class Options {
  constructor() {
    this.options = {};
    this.init();
  }
  init() {
    this.getOptions();
  }
  /**
   * 获取当前执行路径
   */
  getCwd() {
    return process.cwd();
  }

  /**
   * 获取当前执行路径下的所有文件名
   * 如果有 node_modules 目录，则不包含该目录
   * @returns {string}
   */
  getFiles() {
    const cwd = this.getCwd();
    const files = fs.readdirSync(cwd);
    const filesWithoutNodeModules = files.filter((file) => {
      return file !== "node_modules";
    });
    return filesWithoutNodeModules;
  }
  /**
   * 获取 inquirer 的选项
   * 使用 type:"checkbox"
   * 将getFiles()的返回值转换为 inquirer 的选项 追加到choices中
   * choices 中有一个默认值 是当前执行路径下的所有
   * @returns {object}
   */
  getOptions() {
    // const allFile = this.getFiles();
    // const all = {
    //   name: "所有文件",
    //   // 处理 this.getFiles() 将返回值转换为 `"","",` 的形式
    //   value: allFile,
    // };
    const files = this.getFiles();
    const choices = files.map((file) => {
      return {
        name: file,
        value: file,
      };
    });
    // const choices = [all, ...other];

    this.options = {
      type: "checkbox",
      name: "files",
      message: "请选择要打开的文件",
      choices,
    };
    return this.options;
  }
}

module.exports = Options;
// export default Options;
