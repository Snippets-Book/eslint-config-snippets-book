module.exports = {
  env: {
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'project': [
      './tsconfig.json'
    ]
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: {
          parameters: 'first'
        },
        FunctionExpression: {
          parameters: 'first'
        }
      }
    ],
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    'semi-spacing': 'warn',
    'space-unary-ops': [
      'warn',
      {
      	words: true,
        nonwords: false
      }
    ],
    'keyword-spacing': [
      'warn'
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-console': [
      'error'
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'curly': [
      'warn',
      'all'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'warn',
      'never'
    ],
    'no-trailing-spaces': 'warn',
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'brace-style': 'off',
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'for-direction': 'error',
    'getter-return': 'error',
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'max-classes-per-file': 'off',
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'Service',
        args: 'all'
      }
    ],
    'no-dupe-args': 'error',
    'no-eval': 'error',
    'no-import-assign': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-obj-calls': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-setter-return': 'error',
    'no-this-before-super': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-finally': 'error',
    'quote-props': [
      'error',
      'consistent-as-needed'
    ],
    'radix': [
      'warn',
      'as-needed'
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '/'
        ]
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: true
      }
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs'
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNullish: false,
        allowNumber: false,
        allowBoolean: false,
        allowAny: false
      }
    ]
  }
}