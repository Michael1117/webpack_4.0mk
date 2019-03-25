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