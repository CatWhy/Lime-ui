module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    //使用setup语法糖
    "vue/setup-compiler-macros": true,
    },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    'plugin:@typescript-eslint/recommended',
  ],
  //这句不能少
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/comment-directive": 0, //这句不能少不然报错
  }
};
