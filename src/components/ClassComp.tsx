/*
 * @Author: BertKing
 * @version:
 * @Date: 2023-06-02 11:31:24
 * @LastEditors: BertKing
 * @LastEditTime: 2023-06-03 09:47:41
 * @FilePath: /lhx-create-react-app-cli/src/components/Class.tsx
 * @Description:
 */
import React, { PureComponent } from 'react'

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.age = 111
}

// 使用装饰器
@addAge
class ClassComp extends PureComponent {
  age?: number

  render() {
    return <h2>我是类组件---{this.age}</h2>
  }
}

export default ClassComp
