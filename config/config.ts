import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';
import proxy from './proxy'

export default defineConfig({
  // node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none', // all 慢 兼容性好 none 快 兼容性一般
  },
  routes: routes,
  // 快速刷新，可以保持组件状态，同时编辑提供即时反馈
  fastRefresh: {},
  // 配置标题
  title: 'umijs@3',
  // favicon: '线上地址',
  favicon: '/favicon.ico',// 使用本地的图片，图片在public目录
  devServer: {
    // .env里面权限更高一些
    port: 8081,
    // 启用https安全访问，于对应协议服务器通讯
    // https: true
  },
  // 按需加载
  dynamicImport: {
    // 按需加载时指定的loading组件
    loading: '@/components/loading'
  },
  // 指定react app渲染到的HTML元素id
  mountElementId: 'app',
  theme,
  // 引用反向代理的配置
  proxy
});
