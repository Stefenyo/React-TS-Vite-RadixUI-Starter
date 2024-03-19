const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^unused' }],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unsafe-assignment': ['warn'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: true },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-unresolved': 'error',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': ['warn', { extensions }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        es2020: true,
        node: true,
      },
    },
  ],
};
