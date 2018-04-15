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


### Transpiler (babel)
- [babel instalation](https://babeljs.io/docs/setup/#installation)
- `npm install --save-dev babel-loader babel-core`
- `npm install babel-preset-env --save-dev`
	- Compiles from ES6 to ES5.
	- ES5 
	- ES6 === ECMAScripts 2015
- 


### Prettier
- TODO

## Hello world
### Buildtool (webpack)
- [Webpack getting started](https://webpack.js.org/guides/getting-started/)
- [Webpack core concepts](https://webpack.js.org/concepts/)
- `npm install --save-dev webpack webpack-cli`
- [Webpack hello world](https://webpack.js.org/guides/getting-started/)

### Dev server
- `npm install --save-dev webpack-dev-server`


