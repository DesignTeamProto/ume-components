module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/button-has-type": [true, {
      "button": true,
      "submit": true,
      "reset": true,
      }],
    "react/require-default-props": false,
  },
  "globals": {
    "afterEach": true,
    "beforeEach": true,
    "describe": true,
    "it": true,
    "expect": true,
    "jest": true,
  }
  
};