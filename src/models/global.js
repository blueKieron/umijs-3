export default {
  // 所有models里面的namespace不能重名，可省略
  namespace: 'global',
  // 初始化全局数据
  state: {
    title: 'global title',
    text: 'global text',
    login: false,
    a: 'global a',
  },
  // 处理同步业务
  reducers: {
    // copy更新并返回
    setText(state) {
      return {
        ...state,
        text: '全局设置后的text',
      };
    },
    setTitle(state, action) {
      return {
        ...state,
        title: `全局设置后的title${action.payload.a}`,
      };
    },
    signin(state, action) {
      return {
        ...state,
        login: true,
      };
    },
  },
  // 接收来自dispatch({type: 'global/login' ..})
  effects: {
    *login(action, { call, put, select }) {
      const data = yield call(requset, '/umi/login', {
        method: 'post',
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      yield put({
        type: 'signin',
        payload: data,
      });
    },
  },
  subscriptions: {
    listenResize({ dispatch }) {
      window.onresize = function () {
        console.log('onresize');
      };
    },
  },
};
