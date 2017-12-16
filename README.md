# start-react-app
Useful guides to config a react app development

## Init your react app

### Install react with npm
```
npm init
npm install --save react react-dom
```
### Enabling ES6 and JSX

  TODO

### Install dev tools in atom
* `prettier-atom`
* `linter-eslint`

### Config eslint
1. Create eslint config file `.eslintrc.js`
* [eslint user guide](https://eslint.org/docs/user-guide/configuring)
2. Install [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
```
  (
    export PKG=eslint-config-airbnb;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
```
3. Add "extends": "airbnb" to your `.eslintrc.js`
```
  module.exports = {
    extends: 'airbnb'
  }
```

4. Allow jsx in `.js` files
```
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }]
  }
```

### Integrate [flow-type](https://flow.org/)

1. Install `babel-cli` and `babel-preset-flow`
```
  npm install --save-dev babel-cli babel-preset-flow
```

2. Create a `.babelrc` file with `flow` in your `presets`
```
  module.exports = {
    presets: [flow]
  };
```

3. Install `flow-bin`
```
  npm install --save-dev flow-bin
```

4. Add a `flow` script to your package.json
```
  {
    scripts: {
      flow: 'flow'
    }
  }
```
5. Config [flow](https://flow.org/en/docs/config/)

6. Install [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
```
  npm install babel-eslint eslint-plugin-flowtype --save-dev
```

7. Add add flow configs in `.eslintrc.js`
```
  {
    parser: 'babel-eslint',
    plugins: ['flowtype']
  }
```

8. Run flow
```bash
  # only needed for the first time
  npm run flow init
  npm run flow
```
