export default {
  // 支持值为Object Array
  'GET /umi/goodsArr': [
    { id: 1, name: '韭菜' },
    { id: 2, name: '番茄' },
  ],
  'GET /umi/goodsObj': {
    success: true,
    errorCode: 'xx',
    data: [
      { id: 1, name: '韭菜' },
      { id: 2, name: '番茄' },
    ],
  },
  'GET /api/users/create': (req, res) => {
    res.end('OK');
  },
  'GET /umi/auth': (req, res) => {
    res.send({
      isLogin: false,
    });
  },
};
