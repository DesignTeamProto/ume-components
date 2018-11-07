const path = require('path');
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
    Checkbox: path.resolve(__dirname, 'src/components/Checkbox'),
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
      filename: '[name].css',
    }),
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
