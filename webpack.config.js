const path = require('path');

module.exports = {
  entry: {
    Button: './src/components/Button/index.js',
    ButtonGroup: './src/components/ButtonGroup/index.js',
    Checkbox: './src/components/Checkbox/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib/[name].js',
    libraryTarget: 'commonjs2', // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
};
