'use strict';

module.exports = {
  plugins: ['promise'],
  extends: ['xo', 'xo-typescript/space', 'plugin:promise/recommended'],
  rules: {
    'capitalized-comments': 'off',
    'no-console': 'error',

    'promise/no-return-wrap': 'off'
  },
  overrides: [
    {
      files: [
        'test/**/*.ts'
      ],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',

        // disable rules in prettier scope
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/quotes': 'off',
      }
    }
  ]
};
