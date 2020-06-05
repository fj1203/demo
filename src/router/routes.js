/**
 * meta: {
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 * }
 */

export default [
    {
        path: '/',
        component: () => import('@/views/Home/Home.vue')
    }
]
