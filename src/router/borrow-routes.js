export default {
  path: '/borrow',
  component: ()=>import('../pages/borrow/root/borrow'),
  children:[
    {
      name:'application',
      path:'application',
      component:()=>import('../pages/common/application/application')
    }
  ]
}