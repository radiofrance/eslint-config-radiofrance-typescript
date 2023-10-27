const path = require('path');
const test = require('ava');
const eslint = require('eslint');

const config = '../index.js';

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId);

function runEslint(string, config) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: path.join(__dirname, config),
  });

  return linter.executeOnText(string, path.join(__dirname, '../_x.ts')).results[0].messages;
}

// Cant be fixed due https://github.com/typescript-eslint/typescript-eslint/issues/885
test.failing('main', t => {
  const errors = runEslint('const foo: number = 5;', config);
  t.true(hasRule(errors, '@typescript-eslint/no-inferrable-types'), JSON.stringify(errors));
});

test.failing('main error no-console', t => {
  const errors = runEslint('\'use strict\';\nconst x = true;\n\nif (x) {\n  console.log();\n}\n', config);
  t.true(hasRule(errors, 'no-console'), JSON.stringify(errors));
});
