module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
};
