import { connect } from 'umi';
import { useDispatch, useSelector } from 'umi';

const Dva = (props) => {
  const dispatch = useDispatch();
  const { dva } = useSelector((state) => ({ dva: state.dva }));

  return (
    <>
      <h3>dva</h3>
      <h3 className="title">获取全局state</h3>
      <div>text:{props.text}</div>
      <div>title:{props.title}</div>
      <div>a:{props.A}</div>

      <button
        onClick={() => {
          props.dispatch({
            type: 'global/setTitle',
            payload: { a: 1 },
          });
        }}
      >
        change title
      </button>

      <h3 className="title">获取页面state</h3>
      <div>dva:{props.dva}</div>
      <div>dva useSelector:{dva}</div>
      <div>a:{props.a}</div>
      <div>b:{props.b}</div>

      <h3 className="title">发送effect异步请求</h3>
      <button
        onClick={() => {
          props.dispatch({
            type: 'global/login',
            payload: { username: 'alex', password: 'alex123' },
          });
        }}
      >
        发送effect异步请求
      </button>
    </>
  );
};
export default connect((state) => ({
  text: state.global.text,
  title: state.global.title,
  A: state.global.a,

  dva: state.dva,
  a: state.a,
  b: state.b,
}))(Dva);
