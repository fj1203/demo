import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import iView from 'iview'

Vue.use(Router)
const router = new Router({
    base: process.env.VUE_APP_PROJECT_CONTEXT,
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // iView.LoadingBar.start()
    next()
})

router.afterEach(to => {
    // iView.LoadingBar.finish()
})

export default router
