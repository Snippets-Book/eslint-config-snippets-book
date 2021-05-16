# ESLINT CONFIG SNIPPETS-BOOK

This project contains the default eslint ruleset used in snippets-book projects.

## Usage

ESLint 7+ version required.

```shell
npm install --save-dev eslint prettier eslint-config-snippets-book
```

Extend your `.eslintrc.js` at the root of your project and include:

```js
module.exports = {
    extends: [
        'eslint-config-snippets-book',
    ]
}
```
