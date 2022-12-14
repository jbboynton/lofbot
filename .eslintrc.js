module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es2021": true,
  },
  "ignorePatterns": ["node_modules"],
  "parserOptions": {
    "ecmaVersion": "latest",
  },
  "rules": {
    "array-bracket-spacing": "error",
    "camelcase": "error",
    "capitalized-comments": [
      "error",
      "always",
      {
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true,
      },
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore",
      },
    ],
    "indent": ["warn", 2],
    "max-len": [
      "error",
      {
        "code": 80,
        "tabWidth": 2,
        "ignoreUrls": true,
      },
    ],
    "no-console": [
      "error",
      {
        "allow": ["info", "warn", "error"],
      },
    ],
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true,
      },
    ],
    "no-multiple-empty-lines": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true,
      },
    ],
    "space-in-parens": "error",
    "spaced-comment": "error",
  },
}
