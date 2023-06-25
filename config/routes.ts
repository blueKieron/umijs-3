// export default [
//   { path: '/', component: '@/pages/index' },
//   { path: '/login', component: '@/pages/login' },
//   { path: '/reg', component: '@/pages/reg' },
//   { path: '/test', redirect: '/' },
//   { component: '@/pages/404' },
// ]
export default [
  {
    path: '/',
    component: '@/layouts/baselayouts',
    routes: [
      { path: '/login', component: '@/pages/login' },
      { path: '/reg', component: '@/pages/reg' },
      // { path: '/test', redirect: '/' },
      {
        path: '/',
        wrappers: ['@/wrappers/auth'],
        component: '@/layouts/asidelayouts',
        routes: [
          { path: '/goods', component: '@/pages/goods' },
          { path: '/goods/:id', component: '@/pages/goodsDetail' },
        ],
      },
    ],
  },
  { component: '@/pages/404' },
];
