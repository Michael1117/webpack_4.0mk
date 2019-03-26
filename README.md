# webpack_4.0mk
webpack

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