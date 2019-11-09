export default {
    path: '/credit',
    component: ()=>import('../pages/credit/root/credit'),
    children:[
      {
        name:'creditScore',
        path:'creditScore',
        component:()=>import('../pages/credit/children/creditScore/creditScore'),
        children:[
            {
              name:'creditPromote',
              path:'creditPromote',
              component:()=>import('../pages/credit/children/creditPromote/creditPromote'),
              children:[
                {
                  name:'identification',
                  path:'identification',
                  component:()=>import('../pages/credit/children/identification/identification')
                },
                {
                    name:'userInfo',
                    path:'userInfo',
                    component:()=>import('../pages/credit/children/userInfo/userInfo')
                },{
                    name:'link',
                    path:'link',
                    component:()=>import('../pages/credit/children/link/link')
                }
              ]
            }
          ]
      }
    ]
  }