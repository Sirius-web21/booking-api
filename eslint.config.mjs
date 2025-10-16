// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
 {
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',

    "@typescript-eslint/no-unsafe-member-access":'off',

    "@typescript-eslint/no-unsafe-call": 'off',

    "@typescript-eslint/no-unsafe-assignment":'off',

    '@typescript-eslint/no-floating-promises': 'warn',

    '@typescript-eslint/no-unsafe-argument': 'warn',

    "@typescript-eslint/no-unsafe-return":'off',

    "@typescript-eslint/require-await": "warn",

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'crlf',   
        useTabs: false,       
        tabWidth: 4,
        printWidth: 270,     
      }
    ],

    'no-var': 'error',

    '@typescript-eslint/no-unused-vars': [
      'warn',
      { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }
    ],
    
 
    'max-len': [
      'warn',
      {
        code: 270,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: '^\\s*import\\s.+\\sfrom\\s.+;$', 
      }
    ]
  },
},
);