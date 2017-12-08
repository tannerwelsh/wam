module.exports = {
  "extends": "standard",
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "mocha": true
  },
  "rules": {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow no space before function parentheses
    'space-before-function-paren': 0,
    // allow unused expressions (common in tests)
    'no-unused-expressions': 0,
  }
};
