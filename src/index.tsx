/*
 * @Author: BertKing
 * @version:
 * @Date: 2023-05-31 20:19:03
 * @LastEditors: BertKing
 * @LastEditTime: 2023-06-03 09:51:35
 * @FilePath: /lhx-create-react-app-cli/src/index.tsx
 * @Description:
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.querySelector('#root')

if (root) {
  createRoot(root).render(<App />)
}

function hello(name: string) {
  return `hello ${name}`
}

hello('1212')

// console.log('NODE_ENV', process.env.NODE_ENV)
// console.log('BASE_ENV', process.env.BASE_ENV)
// console.log('process.env', process.env)
