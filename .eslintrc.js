module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 60,
        trailingComma: 'es5',
        jsxSingleQuote: false,
      },
    ],
    'comma-dangle': 'off',
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
  },
};
