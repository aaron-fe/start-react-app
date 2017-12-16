module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }]
  }
};
