const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  }
  if (m.name) {
    return m.name;
  }
  return false;
}

module.exports = {
  entry: {
    Button: path.resolve(__dirname, 'src/components/Button'),
    ButtonGroup: path.resolve(__dirname, 'src/components/ButtonGroup'),
    Card: path.resolve(__dirname, 'src/components/Card'),
    Checkbox: path.resolve(__dirname, 'src/components/Checkbox'),
    Fab: path.resolve(__dirname, 'src/components/Fab'),
    Icon: path.resolve(__dirname, 'src/components/Icon'),
  },
  output: {
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2', // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        ButtonStyles: {
          name: 'Button',
          test: (m, c, entry = 'Button') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        ButtonGroupStyles: {
          name: 'ButtonGroup',
          test: (m, c, entry = 'ButtonGroup') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        CheckboxStyles: {
          name: 'Checkbox',
          test: (m, c, entry = 'Checkbox') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
    }),
    new CopyWebpackPlugin([
      { from: 'src/components/dist-package.json', to: 'package.json' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['node_modules'],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
