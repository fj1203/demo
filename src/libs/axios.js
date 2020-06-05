import Axios from 'axios'
import Vue from 'vue'
import router from '@/router'
// import { getCookie, removeCookie } from '@/libs/utils'

Axios.defaults.baseURL = process.env.VUE_APP_BASEURL

// 添加请求拦截器
Axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config.headers = {
        // token: getCookie('token'),
        // systemId: getCookie('systemId')
    }
    Vue.prototype.$Loading.start()
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.data.code && response.data.code !== '0000') {
        Vue.prototype.$Loading.error()
        if (response.data.code === '9977') {
            removeCookie('token')
            router.replace({ name: 'login' })
        }
        Vue.prototype.$Message.error(response.data.message)
        return Promise.reject(response.data)
    }
    Vue.prototype.$Loading.finish()
    return response
}, error => {
    // 对响应错误做点什么
    Vue.prototype.$Loading.error()
    let message = error.response.status === 404 ? '出错啦，您访问的地址不存在' : '出错啦，服务端错误'
    Vue.prototype.$Message.error(message)
    return Promise.reject(error)
})

export default Axios
