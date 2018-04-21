module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    "airbnb",
    'poi-plugin',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'import',
    'react',
  ],
  'globals': {
    "window": false,
    "config": false,
  },
  'rules': {
    'semi': ['error', 'never'],
    'import/no-unresolved': ['error', { 'ignore': ['views/.*'] }],
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': ['error', { 'allow': ['__'], 'allowAfterThis': true }],
    'import/extensions': ['error', { 'es': 'never' }],
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': 'off',
    'no-confusing-arrow': 'off',
    'react/require-default-props': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'function-paren-newline': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/no-multi-comp': 'off',
    'react/forbid-prop-types': 'off',
    'no-underscore-dangle': 'off',
  },
}
