module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'max-len': [
      'warn',
      {
        code: 200,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'import/no-named-as-default-member': [
      'off',
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
};
