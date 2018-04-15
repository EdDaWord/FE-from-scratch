# FE dev from scratch
An accumulation of knowledge from w3Schools to w3c.

## Versioning and Packages

### Version control (git)
- Get [git](https://git-scm.com/downloads)
- Create repo on github
- Clone repo locally `git clone ...`

### Package manager (npm)
- Get [npm](https://www.npmjs.com/get-npm
- Get [nvm](https://github.com/creationix/nvm)
- `npm init` to setup package.json
- Add `.gitignore` to ignore node_modules
- Make that commit and push.

## Syntax
[why do all three (lint, editor conf, prettier)](https://stackoverflow.com/questions/48363647/editorconfig-vs-eslint-vs-prettier-is-it-worthwhile-to-use-them-all)

### Linter (eslint)
- `npm install eslint --save-dev`
- `./node_modules/.bin/eslint --init`
- Don't forget to add the lint command to your package.json
    - add `"lint": "./node_modules/.bin/eslint src/**"`

### EditorConfig
- Install editorConfig IDE/editor package
- `npm install editorconfig-cli --save-dev` OR you can just make your own `.editorConfig` file
- Create `./node_modules/.bin/ec init` such that it matches linter (sorry)

### Prettier
-

## Hello world
### Buildtool (webpack)
- [hello world](https://webpack.js.org/guides/getting-started/)
- [Webpack core concepts](https://webpack.js.org/concepts/)
- `npm install webpack webpack-cli --save-dev`
- [Webpack hello world](https://webpack.js.org/guides/getting-started/)
