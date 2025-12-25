module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
