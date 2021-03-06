'use strict';

module.exports = {
  plugins: ['promise'],
  extends: ['xo/esnext', 'xo-typescript/space', 'plugin:promise/recommended'],
  rules: {
    'capitalized-comments': 'off',
    'no-console': 'error',

    'promise/no-return-wrap': 'off'
  }
};
