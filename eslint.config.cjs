const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "src/*.js"],
    ignores: ["dist/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
