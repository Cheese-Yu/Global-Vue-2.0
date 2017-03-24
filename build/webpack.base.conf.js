var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: './'  //build时用这个地址
    // publicPath: process.env.NODE_ENV === 'production'  //dev时用这个地址
    //   ? config.build.assetsPublicPath
    //   : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          // name: ('img/[name].[hash:7].[ext]')  //开发路径
          name: ('./../img/[name].[hash:7].[ext]')  //生产路径，开发和生产的路径不一样
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: ('../fonts/[name].[hash:7].[ext]')  //路径同理，自己尝试改改
        }
      }
    ]
  },

  //抽离第三方库
  externals : {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
}
}
