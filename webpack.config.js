var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: [{ loader: 'babel-loader' }] 
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      },
      { 
        test: /\.scss$/, 
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass') // 明確使用 sass
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000
  }
};
