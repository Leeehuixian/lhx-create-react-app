/*
 * @Author: BertKing
 * @version:
 * @Date: 2023-06-02 23:04:34
 * @LastEditors: BertKing
 * @LastEditTime: 2023-06-02 23:16:28
 * @FilePath: /lhx-create-react-app-cli/src/components/LazyDemo.tsx
 * @Description:
 */
import { FC, Suspense, lazy } from 'react'

interface LazyWrapperProps {
  /** 组件路径： 在 src/pages 目录下的页面路径，eg: /home => src/pages/home/index.tsx */
  path: string
}

const LazyWrapper: FC<LazyWrapperProps> = ({ path }) => {
  const LazyComponent = lazy(() => import(`@/components/${path}`)) // 使用import语法配合react的Lazy动态引入资源

  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}

export default LazyWrapper
