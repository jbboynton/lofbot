module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "indent": ["warn", 2],
    "no-console": 0
  }
}
