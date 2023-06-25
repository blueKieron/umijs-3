export default {
  '/api': {
    // 要代理的真实服务器地址
    target: 'https://localhost:9001',
    // 可以从http代理到https
    https: true,
    // 依赖origin的功能可能需要这个 比如cookie
    changeOrigin: true,
    // 路径替换
    pathWrite: { '^/api': ''}
  }
}