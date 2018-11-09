const { styles, theme } = require('./styleguide.styles');
const webpackConfigFile = require('./webpack.config.js');

module.exports = {
  components: 'src/components/**/*.jsx',
  sections: [
    { name: 'Components', components: 'src/components/**/*.js' },
    { name: 'Layout', components: 'src/layout/**/*.jsx' },
  ],
  exampleMode: 'collapse',
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  styles,
  theme,
<<<<<<< HEAD
=======
  webpackConfig: webpackConfigFile,
>>>>>>> 8a52c58008cf9e45cf7b105cb4e225e317c11e0f
};
