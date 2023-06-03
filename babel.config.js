/*
 * @Author: BertKing
 * @version:
 * @Date: 2023-06-01 07:40:20
 * @LastEditors: BertKing
 * @LastEditTime: 2023-06-03 00:12:55
 * @FilePath: /lhx-create-react-app-cli/babel.config.js
 * @Description:
 */
const isDEV = process.env.NODE_ENV === 'development' // 是否是开发模式

module.exports = {
  // 预设执行顺序由右往左，所以先处理 ts, 再处理 jsx
  presets: [
    [
      '@babel/preset-env',
      {
        // 设置兼容目标浏览器版本,也可以在根目录配置.browserslistrc文件,babel-loader会自动寻找上面配置好的文件.browserslistrc
        targets: { browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'] },
        useBuiltIns: 'usage', // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
        corejs: 3, // 配置使用core-js使用的版本, core-js的作用是使用低版本 js 语法模拟高版本的库，也就是垫片
        loose: true
      }
    ],
    // 如果您使用的是 Babel 和 React 17，您可能需要将 "runtime": "automatic" 添加到配置中。
    // 否则可能会出现错误：Uncaught ReferenceError: React is not defined
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    isDEV && require.resolve('react-refresh/babel') // 如果是开发模式,就启动react热更新插件
  ].filter(Boolean)
}
