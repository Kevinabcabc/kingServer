export default {
  path: '/mine',
  component: ()=>import('../pages/mine/root/Mine'),
  children: [
    // {
    //   name:'browse',
    //   path: 'browse',
    //   component: ()=>import('../pages/mine/children/browse/browse'),
    // },
    {
      name:'collect',
      path: 'collect',
      component: ()=>import('../pages/mine/children/collect/collect'),
    },
    {
      name:'order',
      path: 'order',
      component: ()=>import('../pages/mine/children/order/order'),
    },
    {
      name:'repayment',
      path: 'repayment',
      component: ()=>import('../pages/mine/children/repayment/repayment'),
    },
  ]
}