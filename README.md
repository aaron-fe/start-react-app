# start-react-app
Useful guides to config a react app development

## Init your react app

#### Install react with npm
```
npm init
npm install --save react react-dom
```
#### Enabling ES6 and JSX

  TODO

#### Install dev tools in atom
* `prettier-atom`
* `linter-eslint`

#### Integrate `eslint-config-airbnb`
```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## References
[React Installation](https://reactjs.org/docs/installation.html#installing-react)
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
