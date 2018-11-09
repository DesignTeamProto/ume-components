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
  webpackConfig: webpackConfigFile,
};
