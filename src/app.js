import { request, history } from 'umi';

let meuns = [];

export const render = async (oldRender) => {
  // 权限校验业务
  const { isLogin } = await request('/umi/auth');
  if (!isLogin) {
    history.push('/login');
  } else {
    // 获取路由数据
    meuns = await request('/umi/menus');
  }
  // 至少被调用一次
  oldRender();
};

export function patchRoutes({ routes }) {
  //动态添加路由
  //routes是原本路由
}

export function onRouteChange({ matchedRoutes, loction, routes, action }) {
  console.log(routes); // 路由集合
  console.log(matchedRoutes); // 当前匹配的路由及其子路由
  console.log(loction); // location及其参数
  console.log(action); // 当前跳转执行的操作

  document.title = matchedRoutes[matchedRoutes.length - 1].route.title || 'hh';
}

export const request = {
  // 延时
  timeout: 1000,
  // 错误处理
  errorConfig: {},
  // 使用中间件
  middleWares: [],
  requestInterceptors: [
    // 请求地址 配置项
    (url, options) => {
      options.headers = { token: '123333' };
      return { url, options };
    },
  ],
  responseInterceptors: [
    // 响应体 请求时的配置项
    (response, option) => {
      return response;
    },
  ],
};
