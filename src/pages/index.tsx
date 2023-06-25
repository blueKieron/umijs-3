import { useState } from 'react'
import { Button } from 'antd';
import { Button as Mbutton } from 'antd-mobile';
import styles from './index.less';
import user from '../assets/image/touxiangTest.jpg';
import Child from './child'
import AppContext from './context'

export default function IndexPage() {

  const [count] = useState('父数据')

  return (
    <AppContext.Provider value={{count: count}}>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary">主要按钮</Button>
      <Mbutton type="primary" size="small"></Mbutton>

      <h1 className={styles.title}>写死</h1>
      <img src={user} />
      <img src={require('../assets/image/touxiangTest.jpg')} />

      <h1 className={styles.title}>动态图片</h1>
      <img src={user} />
      {/* 指向零时的public目录 */}
      <img src="/imgs/touxiangTest.jpg" />

      <h1 className={styles.title}>样式内部使用</h1>
      <div style={{ height: 200 }} className={styles.test}></div>

      <h1 className={styles.title}>变量-全局</h1>
      <div className="myLink">测试</div>

      <h1 className={styles.title}>变量-局部</h1>
      <div className={styles.header}>测试</div>

      <h1 className={styles.title}>父组件</h1>
      <Child></Child>
    </AppContext.Provider>
  );
}
