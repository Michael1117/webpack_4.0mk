
# webpack_4.0mk
webpack

###第1章 课程导学
掌握Webpack越来越成为前端工程师的标配技能，本章会对课程整体进行介绍，打消你的学习疑虑。
1-1 课程导学 

###第2章 Webpack 初探
本章通过清晰易懂的例子，带你了解 Webpack 的产生背景，以及其能够解决的问题。在此基础上，完成开发环境的搭建，Webpack 的安装，并进行最基础的 Webpack 使用讲解。
2-1 webpack 究竟是什么？
2-2 什么是模块打包工具？
2-3 Webpack的正确安装方式
2-4 使用Webpack的配置文件
2-5 浅析 Webpack 打包输出内容

###第3章 Webpack 的核心概念
本章讲解 Webpack 中的一些核心概念，从 Loader 与 Plugin 开始，带你学明白 Webpack 的运行机制，然后逐步深入，扩展衍生出 SoureMap， HMR， WDS 等常见概念。本章课程学习过程中，额外增加了对 Webpack 官方文档的查阅方式讲解，帮助大家学会查阅文档。...
3-1 什么是 loader 
3-2 使用 Loader 打包静态资源（图片篇）
3-3 使用 Loader 打包静态资源（样式篇 - 上）
3-4 使用 Loader 打包静态资源（样式篇 - 下）
3-5 使用 plugins 让打包更便捷
3-6 Entry 与 Output 的基础配置
3-7 SourceMap 的配置
3-8 使用 WebpackDevServer 提升开发效率
3-9 Hot Module Replacement 热模块更新（1）
3-10 Hot Module Replacement 热模块更新（2）
3-11 使用 Babel 处理 ES6 语法（1）
3-12 使用 Babel 处理 ES6 语法（2）
3-13 Webpack 实现对React框架代码的打包

###第4章 Webpack 的高级概念
本章接第三章内容，继续讲解 Webpack 中难度更大的知识点，包含了 Tree Shaking，Code Spliting，打包环境区分，缓存，shimming 等内容，帮助你继续扩展 Webpack 的基础知识面。
4-1 Tree Shaking 概念详解 
4-2 Develoment 和 Production 模式的区分打包
4-3 Webpack 和 Code Splitting（1）
4-4 Webpack 和 Code Splitting（2）
4-5 SplitChunksPlugin 配置参数详解（1）
4-6 SplitChunksPlugin 配置参数详解（2）
4-7 Lazy Loading 懒加载，Chunk 是什么？
4-8 打包分析，Preloading, Prefetching
4-9 CSS 文件的代码分割
4-10 Webpack 与浏览器缓存( Caching )
4-11 Shimming 的作用
4-12 环境变量的使用方法

###第5章 Webpack 实战配置案例讲解
本章通过库文件打包，PWA项目打包，TypeScript打包支持等实战常见 Webpack 配置案例，带大家了解最新前端工程化常识，并在实例实现的过程中，巩固前三章节的基础知识点。同时章节末尾进行了 Webpack 打包性能优化的内容，帮助同学们了解如何在打包速度过慢时进行合理的打包过程优化。...
5-1 Library 的打包
5-2 PWA 的打包配置
5-3 TypeScript 的打包配置
5-4 使用 WebpackDevServer 实现请求转发
5-5 WebpackDevServer 解决单页面应用路由问题
5-6 EsLint 在 Webpack 中的配置（1）
5-7 EsLint 在 Webpack 中的配置（2）

## 缺点：
  -1. 多出三个http 请求
  -2. 从代码中看不出文件层级之间的相互关系
  -3. 引入顺序不同，会出错，出错后很难查错，代码不容易维护


## 改进后

### 1. index.html 中只引入一个index.js了，减少了http请求次数
### 2. 文件和文件之间的层级关系一目了然，都在index.js中可见
### 3. 不会出现引入顺序不同导致的出错，因为首先加载了依赖的文件

## ES module 浏览器默认不支持  chrome 73


## npx webpack index.js  用webpack翻译index.js

## webpack是一个模块打包工具

### 1. ES Module 模块引入方式
### 2. CommonJS 模块引入规范
### 3. CMD 
### 4. AMD

## 最早的时候webpack是一个JavaScript打包工具  -> 现在能够打包任何形式的文件


### webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging

## Modules  API


## npx webpack -v

### npm info webpack 看看webpack相关信息

### npm i webpack@4.16.5 -D

### npx webpack

### npm run build

### global 全局命令

webpack index.js

### local 本地命令

npx webpack index.js

配置package.json 里的scripts
  "build": "webpack"

然后npm run build


### 当使用一个url-loader打包一个图片是，并不会像file-loader一样生成一个单独的图片，而是以base64的格式打包到bundle.js中， url-loader需要自己安装。

### 
```javascript
  {
    loader: 'css-loader',
    options:{
            importLoaders: 2,
            modules: true
    }
  },

```

好处：模块里的样式不会互相冲突。


### Asset Management Loading Data

### 使用plugins让打包更加便捷


### htmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中

plugin可以在webpack运行到某个时刻的时候 ，帮你做一些事情

### clean-webpack-plugin 打包之前运行 html-webpack-plugin 打包之后运行

### SourceMap配置

现在知道dist目录下main.js文件96行出错

sourceMap本质上是一个映射关系，它知道dist目录下mai.js文件96行实际对应的是src目录下index.js文件中的第一行

当前其实是index.js中的第一行代码出错了

### development 环境下
source-map配置
devtool: cheap-module-eval-source-map


### production 环境下
source-map配置
devtool: cheap-module-source-map

### WebpackDevServer 提升开发效率 (需要安装)

监听文件的变化，并重新打包，还能重新刷新浏览器

### webpack index.js -o bundle.js

### GUIDES 里的 Development
### API 里的 Node.js API Command Line Interface


### Hot Module Replacement

### css 不需要自己配置 因为css-loader 内置了，但是JavaScript没有，需要自己配置

### GUIDES 里的 Hot Module Replacement

### API 里的 Hot Module Replacement

### Concepts里的Hot Module Replacement实现原理


## 使用Babel处理ES6语法

### babel-loader 只是webpack和babel做通信的桥梁，webpack和babel连通了，但是并不会将ES6语法编译成ES5语法，这时候就需要借助@babel/preset-env

### @babel/preset-env只做了部分语法简单的转换，并不能让所有浏览器都支持，这时候需要安装@babel/polyfill


### @babel/polyfill和@babel/preset-env通常是搭配使用的
运行npx webpack

### @babel/polyfill默认将所有需要解析的ES6都转换成ES5，这样文件体积会增大很多，需要配置，还需要在页面中引入import "@babel/polyfill"

webpack.config.js
```javascript
  options: {
            "presets": [["@babel/preset-env",{
                useBuiltIns: 'usage' // 按需加载
            }]]
      }
```

### 这样可以做到按需加载，用到哪个解析加载哪个

### npm i @babel/plugin-transform-runtime -D

```javascript
"plugins":[["@babel/plugin-transform-runtime",{
            "corejs": 2,
            "helper": true,
            "regenerator": true,
}]]
```

自己写业务代码的话只需要引入polyfill，并配置好@babe/preset-env

如果是写react/vue项目的话，需要配置@babel/plugin-transform-runtime


polyfill会污染全局环境，@babel/plugin-transform-runtime会以闭包的形式注入或者是引入内容，不存在全局污染


### npm i @babel/runtime-corejs2 --save

或者直接创建.babelrc文件，在.babelrc里配置

```javascript
{
  "plugins": [["@babel/plugin-transform-runtime",{
      "corejs": 2,
      "helper": true,
      "regenerator": true,
      "useESModules": false
  }]]
}
```

### 配置React代码的打包

### Tree Shaking 只支持 ES Module ，Common.js不支持
Tree Shaking 只支持静态引入的方式
Common.js是动态引入的方式

### package.json
```javascript
"sideEffects": false,  // 所有的模块都不进行Tree Shaking
```

如果配置了Tree Shaking，webpack只要打包一个模块就会运用Tree Shaking来进行打包。

如果引入了一个包，但是没有导出任何东西，Tree Shaking打包时会忽略掉，但实际上这个包是需要的，所以需要在package.json里来设置

### package.json
```javascript
"sideEffects": ["@babel/polly-fill"],  // 只对 @babel/polly-fill 不进行Tree Shaking
```

### 使用了Tree Shaking  main.js 中会多出 /*! exports used: add */

/*! exports provided: add, minus */
/*! exports used: add */

### webpack-merge

### Code Splitting

### webpack做同步代码分割时，需要配置

### webpack做异步代码分割时，不用配置 自动打包到一个单独的文件(

代码分割，和webpack无关

webpack中实现代码分割，两种方式

1.同步代码： 只需要在webpack.common.js中做optimization的配置即可
2.异步代码(import): 异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中

### Plugin / SplitChunksPlugin

###

```javascript
webpack.config.js

// 当加载一个同步代码的时候，代码会走到cacheGroups/vendors中，如果是node_modules中的包，webpack会做代码分割，打包之后的名字会形成一个新的文件vendors.js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'all',  // all:表示同步和异步都做分割 async:异步代码代码分割 initial表示同步 默认async
      minSize: 30000,  //大于30000字节才做代码分割  30kb
      maxSize: 0,
      minChunks: 1, // 当一个模块至少引入了多少次的时候 才进行分割
      maxAsyncRequests: 5,  // 同时加载的请求数 5 个
      maxInitialRequests: 3,  // 首页加载的时候
      automaticNameDelimiter: '~',  // 文件生成的时候 文件中的分割符  verdors~main.js
      name: true,   // 
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,  // 库是否是在node_modules下，是就不打包
          priority: -10,
          filename: 'vendors.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};

```

### chunks: ['async'| 'initial'] 时， 当引入同步的代码(库)的时候，webpack知道该为同步的代码(库)进行打包，这时候会走到cacheGroups中，有一个vendors项，里面有一个test，test: /[\\/]node_modules[\\/]/,  // 库是否是在node_modules下，是就不打包

### 如果引入的是node_modules里的包的话，那么会走cacheGroups里的vendors，如果是自己定义的包的话，那么会走cacheGroups里的default

```javascript
cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,  // 库是否是在node_modules下，是就不打包
          priority: -10,
          filename: 'vendors.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true
        }
      }
```


 priority: -10优先级大于 priority: -20,

 ### Lazy Loading 连加载 ，Chunk

 ### 项目打包完成后，dist文件夹下有几个文件，就是几个chunks


 ### 打包分析 Preloading Prefetching


 ### (https://github.com/webpack/analyse)

 ### webpack --profile --json > stats.json

 多出来一个stats.json

 ### https://webpack.github.io/analyse/

 ### ctrl+shift+p  输入 Coverage -> 点击 Instrument Coverage


 ### 缓存带来的性能提升是非常有限的，我们应该考虑的是怎样让代码的利用率更高，交互之后才用到的代码，完全可以写在异步组件里去，通过懒加载的形式去把代码逻辑加载进来，这样可以是代码性能得到较大的提升，页面访问速度会更快，更多的关注code Coverage，代码覆盖率上来。


 ### CSS 文件的代码分割  npm i mini-css-extract-plugin -D  暂时不支持HMR 因此配置到开发版本中
 MiniCssExtractPlugin 将CSS 文件单独拎出来打包

 ### 一定要注意tree Shaking

 ### npm i optimize-css-assets-webpack-plugin -D

 ### contenthash 

```javascript
 optimization: {
        runtimeChunk: {
            name: 'runtime'  // 新版本可以配置也可以不配置
        },
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, 
                    priority: -10,
                    name: 'vendors'
                }
            }
        }
    },
```

// manifest存在于main.js中 也存在于vendors中 03:04:40

## Shimming  代码的兼容 | 打包的兼容

### imports-loader  能将模块中的this 指向window

### Guides

## 环境变量的使用

## Development 和 Production模式的区分打包

// 开发环境中 sourceMap是非常全的，快速定位到问题， 不要压缩，
// 线上环境 sourceMap 不是那么重要，要压缩，

## Library

## proxy 只能在webpack-dev-server环境下有效

## historyApiFallback 单页应用  只在开发环境有效，线上需要依靠后端来配置

## npx eslint --init
  选项

## npx eslint src

### npm i babel-eslint -D

## force: 'pre' 改变loader 执行顺序

## git 钩子 eslint src

## 优化 

1. 跟上技术的迭代 (Node, Npm, Yarn)
2. 在尽可能少的模块上应用Loader
3. Plugin尽可能精简 并确保可靠

extensions  ['.js', '.jsx', '.jpg']
mainFiles
alias

## 5-10 使用DIIPlugin提高打包速度