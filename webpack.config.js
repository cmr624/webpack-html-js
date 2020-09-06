const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// if we want to copy more HTML
// https://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder
module.exports = {
  mode : "development",
  devtool:"inline-source-map",
  devServer:{
      contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins:[
    new HTMLWebpackPlugin({
      template:"./src/index.html"
    })
  ],
};