const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  //入口:可以是字符串/数组/对象，这里入口只有一个,所以写一个字符串即可
  entry:'./src/main.js',
  //出口:通常是一个对象，里面至少包含两个重要属性，path和filename
  output:{
  //注意:path通常是一个绝对路径
    path:path.resolve(__dirname,'../dist'),//动态获取绝对路径
    filename:'bundle.js',
    // publicPath:'../dist/',
  },
  //在原来的module.exports中添加
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.less$/i,
        use: [{
          loader:"style-loader"
        },{
          loader:"css-loader"
        }, {
          loader: "less-loader"
        }]
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015"]
          }
        }
      },

      //自己加
      {
        test:/\.(png|jpg)$/,
        use:[
            {
              loader: 'file-loader',
              options:{
                limit: 8192,
                name: 'img/[name].[hash:8].[ext]'
              },
            },
          ],
      },

      {
        test: /\.vue$/,
        use: ['vue-loader']
      },

    ],
  },
  resolve: {
    //alias:别名
    alias: {
      // 'vue$' : 'vue/dist/vue.esm.js'
      'vue$' : '../node_modules/vue/dist/vue.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终解释权'),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new uglifyJsPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }

}