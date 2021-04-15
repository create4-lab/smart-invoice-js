module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
    'truffle/globals': true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'truffle',
    '@typescript-eslint'
  ],
  rules: {
  }
}
