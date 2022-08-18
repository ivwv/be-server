class Test {
  static test() {
    return __dirname;
  }
}

console.log({
  foo: Test.test(),
});
console.log(__dirname);
