const path = require('path');
const PATHS = {
       app: path.join(__dirname,'app'),
       build: path.join(__dirname,'build')
     };
module.exports = {
       entry: {
              app: PATHS.app
       },
       output: {
         path: PATHS.build,
         filename: 'bundle.js'
       },
       module: {
     loaders: [
      {
          test: /\.css$/,
          loaders: ['style-loader','css-loader']
      },
      {
         test: /\.js?/,
         loader: 'babel-loader'
      },
      {
         test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader? limit=10000&mimetype=application/font-woff'
       },
       {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
       },
       {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
        },
        {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
       },
{ 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      },
     ]
    },
 devServer: {
    host: '127.0.0.1',
    port: 4040,
  }
     };