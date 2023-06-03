/*
 * @Author: BertKing
 * @version:
 * @Date: 2023-05-31 20:18:43
 * @LastEditors: BertKing
 * @LastEditTime: 2023-06-03 09:54:34
 * @FilePath: /lhx-create-react-app-cli/src/App.tsx
 * @Description:
 */
import { Suspense, lazy, useState } from 'react'
import lessStyles from '@/app.less'
import scssStyles from '@/app.scss'
import stylStyles from '@/app.styl'
import smallImg from '@/assets/imgs/5kb_img.jpeg'
import bigImg from '@/assets/imgs/10kb_img.jpeg'
// import memberList from './test.json'
import LazyWrapper from './components/LazyWrapper'
import { Demo1 } from './components'
import ClassComp from './components/ClassComp'

function App() {
  const [count, setCounts] = useState('')
  const [show, setShow] = useState(false)
  const onChange = (e: any) => {
    setCounts(e.target.value)
  }

  // 点击事件中动态引入css, 设置show为true
  const handleOnClick = () => {
    import('@/App.css')
    setShow(true)
  }

  // prefetch
  const PreFetchDemo = lazy(
    () =>
      import(
        /* webpackChunkName: "PreFetchDemo" */
        /* webpackPrefetch: true */
        './components/PreFetchDemo'
      )
  )

  // preload
  const PreloadDemo = lazy(
    () =>
      import(
        /* webpackChunkName: "PreloadDemo" */
        /* webpackPreload: true */
        './components/PreloadDemo'
      )
  )

  // console.log('memberList', memberList)

  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles.lessBox}>
        <div className={lessStyles.box}> lessBox 一切都会好起来的</div>
        <img src={smallImg} alt='小于10kb的图片' />
        <img src={bigImg} alt='大于于10kb的图片' />
        <div className={lessStyles.smallImg}>小图片背景</div>
        <div className={lessStyles.bigImg}>大图片背景</div>
      </div>
      <div className={scssStyles.scssBox}>
        <div className={scssStyles.box}>scssBox</div>
      </div>
      <div className={stylStyles.stylBox}>
        <div className={stylStyles.box}>stylBox</div>
      </div>
      <ClassComp />
      <div>
        <p>受控组件</p>
        <input type='text' value={count} onChange={onChange} />
        <br />
        <p>非受控组件</p>
        <input />
      </div>
      <Demo1 />
      <h2 onClick={handleOnClick}>展示</h2>
      {/* show为true时加载LazyDemo组件 */}
      {show && <LazyWrapper path='LazyDemo' />}
      {show && (
        <>
          <Suspense fallback={null}>
            <PreloadDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
