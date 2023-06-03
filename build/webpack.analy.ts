/*
 * @Author: BertKing
 * @version:
 * @Date: 2023-06-02 11:52:38
 * @LastEditors: BertKing
 * @LastEditTime: 2023-06-03 00:24:20
 * @FilePath: /lhx-create-react-app-cli/build/webpack.analy.ts
 * @Description:
 */
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import prodConfig from './webpack.prod'

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// 引入webpack打包速度分析插件
const smp = new SpeedMeasurePlugin()

// 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
const analyConfig: Configuration = smp.wrap(
  merge(prodConfig, {
    plugins: [
      new BundleAnalyzerPlugin() // 配置分析打包结果插件
    ]
  })
)

export default analyConfig
