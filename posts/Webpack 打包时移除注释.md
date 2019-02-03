---
title: Webpack 打包时移除注释
date: 2016-03-04
---

> 有些情况下，需要移除 HTML/CSS/JavaScript 的注释，找了半天才翻出这些配置，记录下来。

## 配置

```javascript
/**
 * @file webpack.config.js, 只保留了关键部分的配置.
 */

module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      // 移除 CSS 内注释
      loader: ExtractTextPlugin.extract('vue-style', 'css?' + '{"discardComments":{"removeAll":true}}')
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        // 移除 JavaScript 内注释
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      minify: {
        // 移除 HTML 内注释
        removeComments: true
      }
    })
  ]
}
```


## 参考

JavaScript
- <https://github.com/webpack/webpack/issues/324#issuecomment-46957483>
- <https://github.com/mishoo/UglifyJS2#usage>

CSS
- <https://www.mgenware.com/blog/?p=2984>
- <https://github.com/ben-eb/postcss-discard-comments#removeall>

HTML
- <https://github.com/ampedandwired/html-webpack-plugin#configuration>
- <https://github.com/kangax/html-minifier#options-quick-reference>
