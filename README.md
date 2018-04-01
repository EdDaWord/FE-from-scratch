# FE dev from scratch
An accumulation of knowledge from [w2 schools](https://www.w3schools.com/) to [react](https://reactjs.org/).

## Meta Setup
### Version control (git)
- Get [git](https://git-scm.com/downloads)
- Create repo on github
- Clone repo locally `git clone ...`

### Package manager (npm)
- Get [npm](https://www.npmjs.com/get-npm)
- Get [nvm](https://github.com/creationix/nvm)
- `npm init` to setup package.json
- Add `.gitignore` to ignore node_modules
- Make that commit and push.

### Linter (eslint)
- `npm install eslint --save-dev`
- `./node_modules/.bin/eslint --init`
- Don't forget to add the lint command to your package.json
    - add `"lint": "./node_modules/.bin/eslint src/**"`

### Buildtool (webpack)
- [Webpack core concepts](https://webpack.js.org/concepts/)
- `npm install webpack webpack-cli --save-dev`