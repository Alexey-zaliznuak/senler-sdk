import { FlatCompat } from '@eslint/eslintrc';
import { resolve } from 'path';
import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';


// Используем FlatCompat для совместимости с плагинами
const compat = new FlatCompat({
  baseDirectory: resolve('.'),
});


export default [
  {
    files: [
      'src/**/*.ts',
      'tests/**/*.ts',
    ],
    languageOptions: {
      ecmaVersion: 2020, // Используем ECMAScript 2020
      sourceType: 'module', // Модули ES
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    rules: {
      // Enforce single quotes for strings
      quotes: ['error', 'single', { avoidEscape: true }],

      // Limit maximum line length to 200 characters
      'max-len': [
        'error',
        {
          code: 200,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],

      // Prettier integration as an ESLint rule
      'prettier/prettier': 'error',

      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Warnings for console usage
      'no-console': 'warn',

      // Allow single named exports without requiring default exports
      'import/prefer-default-export': 'off',

      // Disable strict requirement to use 'this' in class methods
      'class-methods-use-this': 'off',

      // Disable default rule for 'use before define' and enable TypeScript version
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],

      // Disable default rule for variable shadowing and enable TypeScript version
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
    },
  },

  // Ignore JS files if the project is TypeScript only
  {
    ignores: ['node_modules', 'dist', '*.js'],
  },
];
