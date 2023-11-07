const eslintConfigXoTypescript = require('eslint-config-xo-typescript');

const ruleBanTypeOverride = eslintConfigXoTypescript.rules['@typescript-eslint/ban-types'];
delete ruleBanTypeOverride[1].types.null;

const ruleNamingConventionOverride = eslintConfigXoTypescript.rules['@typescript-eslint/naming-convention'];
ruleNamingConventionOverride[1].format = [
  'strictCamelCase',
  'snake_case',
];

module.exports = {
  plugins: ['promise'],
  extends: ['xo', 'xo-typescript/space', 'plugin:promise/recommended'],
  rules: {
    'capitalized-comments': 'off',
    'promise/no-return-wrap': 'off',
    'no-console': 'error',
    // Override naming convention rule to allow `snake_case`.
    '@typescript-eslint/naming-convention': ruleNamingConventionOverride,
    // Override this rule to allow usage of null and undefined.
    '@typescript-eslint/ban-types': ruleBanTypeOverride,
    // Disable this rule because we need interface and type.
    '@typescript-eslint/consistent-type-definitions': 'off',
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
