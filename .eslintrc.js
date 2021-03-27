module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:mocha/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'sonarjs',
    'no-use-extend-native',
    'node',
    'promise'
  ],
  rules: {
    'no-unused-labels': 'warn',
    'no-underscore-dangle': 'off',
    'object-shorthand': 'warn',
    'object-curly-newline': 'warn',
    'prefer-destructuring': 'warn',
    'no-bitwise': 'off',
    'max-len': ['warn', 120],
    'no-prototype-builtins': 'warn',
    'no-param-reassign': 'warn',
    'camelcase': 'warn',
    'node/exports-style': [
      'error',
      'module.exports',
    ],
    'node/prefer-global/buffer': [
      'error',
      'always',
    ],
    'node/prefer-global/console': [
      'error',
      'always',
    ],
    'node/prefer-global/process': [
      'error',
      'always',
    ],
    'node/prefer-global/url-search-params': [
      'error',
      'always',
    ],
    'node/prefer-global/url': [
      'error',
      'always',
    ],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    'strict': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unsupported-features/node-builtins': 'off',
    'node/no-missing-import': 'off',
    'import/extensions': 'off',
    'node/file-extension-in-import': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'node/no-unpublished-import': 'off',
    'promise/always-return': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    "no-unused-vars": 0,
    "no-undef": 1,
    "no-shadow": 1,
    "no-redeclare": 1,
    "no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars":'warn',
    "@typescript-eslint/no-use-before-define": 1,
    // ^^^ eslint bug
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/quotes": [2, "double", { "avoidEscape": true }],
    "@typescript-eslint/require-await": 2,
    "@typescript-eslint/restrict-plus-operands": 2,
    "@typescript-eslint/restrict-template-expressions": 0,
    "array-bracket-spacing": [2, "never"],
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "comma-spacing": 2,
    "comma-dangle": [2, "always-multiline"],
    "complexity": [1, { "max": 10 }],
    "curly": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    "eqeqeq": 1,
    "indent": [2, 2],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "no-console": 1,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-implicit-globals": 2,
    "no-multi-spaces": 2,
    "no-unused-expressions": 0,
    "no-useless-escape": 1,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always"],
    "quotes": 0,
    "require-atomic-updates": 2,
    "semi": 2,
    "semi-spacing": 2,
    "space-in-parens": [2, "never"],
    "space-unary-ops": 2,
  },
  overrides: [{
    files: ['**/*.ts'],
    parser: '@typescript-eslint/parser',
  }],
};