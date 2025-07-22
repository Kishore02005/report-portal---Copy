// .eslintrc.js
module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    __initial_auth_token: "readonly",
    __app_id: "readonly",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};