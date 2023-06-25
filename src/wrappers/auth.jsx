import { Redirect } from 'umi' 

export default (props) => {
  const count = Math.random() < 0.5
  debugger
  if (count) {
    return <div>{ props.children }</div>
  } else {
    return <Redirect to='/login' />
  }
}