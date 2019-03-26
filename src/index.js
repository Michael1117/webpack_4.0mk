/* 
    第一种方式
    首次访问页面的时候，加载main.js 2mb
    打包文件会很大 加载时间很长
    当业务逻辑发生变化时 又要加载2mb的内容

*/
// 业务逻辑 1Mb
console.log(_.join(['a','b','c'], '***'))

// 省略10000行业务逻辑代码
console.log(_.join(['a','b','c'], '***'))
// 第二种方式

// main.js被拆分成 lodash.js(1Mb)，main.js(1Mb)
// 当页面业务逻辑发生变化时，只要加载main.js即可(1Mb)

