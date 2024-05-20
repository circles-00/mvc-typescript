// @ts-check
import parser from '@typescript-eslint/parser'
import security from 'eslint-plugin-security'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: parser,
      globals: {
        es6: 'readonly',
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
      security,
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'security/detect-non-literal-fs-filename': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      'linebreak-style': ['error', 'unix'],
      'jsx-a11y/anchor-is-valid': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { variables: false },
      ],
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
    },
  },
]
