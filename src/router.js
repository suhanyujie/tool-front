const routers = [
    {
        path: '/',
        name: 'tool',
        meta: {
            title: 'test title'
        },
        component: (resolve) => require(['./views/index/index.vue'], resolve),
        children: [
            {
                path: 'toolImageService',
                name: 'toolImageService',
                meta: {
                    icon: 'md-arrow-dropdown-circle',
                    title: '测试子页面',
                },
                component: (resolve)=>require(['./components/HelloWorld.vue'], resolve),
            },
            {
                path: 'toolImage2',
                name: 'toolImage2',
                meta: {
                    icon: 'md-arrow-dropdown-circle',
                    title: '测试子页面',
                },
                component1: (resolve)=>require(['./components/toolImage2.vue'], resolve),
                component: ()=>import('@/components/toolImage2.vue')
            }
        ]
    }
];
export default routers;
