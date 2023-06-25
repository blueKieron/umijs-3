import { useContext } from 'react'
import AppContext from '../context'

const Child = () => {
  const { count } = useContext(AppContext)
  return (
    <>
      <h3>子组件</h3>
      <div>{count}</div>
    </>
  )
}

export default Child