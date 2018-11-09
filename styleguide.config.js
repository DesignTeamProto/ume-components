const path = require('path');
const { styles, theme } = require('./styleguide.styles');

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
};
