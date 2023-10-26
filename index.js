'use strict';

module.exports = {
  plugins: ['promise'],
  extends: ['xo', 'xo-typescript/space', 'plugin:promise/recommended'],
  rules: {
    'capitalized-comments': 'off',
    'promise/no-return-wrap': 'off',
    'no-console': 'error',
    // Rewrite naming convention rule to allow `snake_case`.
    // Copy from https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js#L3
    ...getNamingConventionRule(),
  },
  overrides: [
    {
      files: [
        'test/**/*.ts',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
};

const getNamingConventionRule = () => ({
  '@typescript-eslint/naming-convention': [
    'error',
    {
      // selector: ['variableLike', 'memberLike', 'property', 'method'],
      // Note: Leaving out `parameter` and `typeProperty` because of the mentioned known issues.
      // Note: We are intentionally leaving out `enumMember` as it's usually pascal-case or upper-snake-case.
      selector: ['variable', 'function', 'classProperty', 'objectLiteralProperty', 'parameterProperty', 'classMethod', 'objectLiteralMethod', 'typeMethod', 'accessor'],
      format: [
        'strictCamelCase',
        'snake_case',
      ].filter(Boolean),
      // We allow double underscore because of GraphQL type names and some React names.
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'allow',
      // Ignore `{'Retry-After': retryAfter}` type properties.
      filter: {
        regex: '[- ]',
        match: false,
      },
    },
    {
      selector: 'typeLike',
      format: [
        'StrictPascalCase',
      ],
    },
    {
      selector: 'variable',
      types: [
        'boolean',
      ],
      format: [
        'StrictPascalCase',
      ],
      prefix: [
        'is',
        'has',
        'can',
        'should',
        'will',
        'did',
      ],
    },
    {
      // Interface name should not be prefixed with `I`.
      selector: 'interface',
      filter: /^(?!I)[A-Z]/.source,
      format: [
        'StrictPascalCase',
      ],
    },
    {
      // Type parameter name should either be `T` or a descriptive name.
      selector: 'typeParameter',
      filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
      format: [
        'StrictPascalCase',
      ],
    },
    // Allow these in non-camel-case when quoted.
    {
      selector: [
        'classProperty',
        'objectLiteralProperty',
      ],
      format: null,
      modifiers: [
        'requiresQuotes',
      ],
    },
  ],
});

