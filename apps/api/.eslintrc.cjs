/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['custom/node'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
