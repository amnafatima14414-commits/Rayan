.eslintrc.js
module.exports = {
  root: true,
  extends: ['@react-native', '@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 1,
  },
};
