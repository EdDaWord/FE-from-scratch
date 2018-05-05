# FE dev from scratch
Saving my learnings to a repo instead of random notes.

## 1) Version control and libraries

#### Version control (git)
- Get [git](https://git-scm.com/downloads)
- Create repo on github 
- Clone repo locally `git clone ...`

#### Package manager (npm)
Why not Yarn or Parcel? (IDK)
Why not do a mono-repo with Lerna? (IDK)

- Get [npm](https://www.npmjs.com/get-npm)
- Get [nvm](https://github.com/creationix/nvm)
- `npm init` to setup package.json
- Don't forget to add `.gitignore` in order to ignore node_modules & `dist` (bundle output) 

## Syntax

#### Linter (eslint)
- `npm install eslint --save-dev`
- `./node_modules/.bin/eslint --init`
- Don't forget to add the lint command to your package.json
    - add `"lint": "./node_modules/.bin/eslint src/**"`

#### EditorConfig
- Install editorConfig IDE/editor package
- `npm install editorconfig-cli --save-dev` OR you can just make your own `.editorConfig` file
- Create `./node_modules/.bin/ec init` such that it matches linter (sorry)

#### Pre-commit (eslint)
- `npm install --save-dev pre-commit`

#### Transpiler (babel)
- [babel instalation](https://babeljs.io/docs/setup/#installation)
- `npm install --save-dev babel-loader babel-core`
- `npm install babel-preset-env --save-dev`
	- Compiles from ES6 to ES5.
	- ES5 
	- ES6 === ECMAScripts 2015


## Hello world

#### Buildtool (webpack)
- [Webpack getting started](https://webpack.js.org/guides/getting-started/)
- [Webpack core concepts](https://webpack.js.org/concepts/)
- `npm install --save-dev webpack webpack-cli`
- [Webpack hello world](https://webpack.js.org/guides/getting-started/)

#### Dev server
- `npm install --save-dev webpack-dev-server`


## Release
Why `standard-version` and not `conventional-commits-parser`?
	- I don't know.

#### Change logs and tags (Standard-version)
- `npm install --save-dev standard-version` 
- `npm run release`


