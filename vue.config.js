const path = require('path')
const WebpackScpPlugin = require('./plugins/webpack-scp-plugin')
const resolve = dir => {
    return path.join(__dirname, dir)
}

const BASE_URL = process.env.VUE_APP_PUBLIC_PATH

const config = {
    publicPath: BASE_URL,
    lintOnSave: false,
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true // less3 inline JavaScript is not enabled
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    configureWebpack: {
        plugins: []
    },
    devServer: {
        before: function (app) {
            if (!process.env.npm_config_proxydev) {
                app.use(require('connect-cgi-mock')({
                    root: resolve(''),
                    route: '/mock'
                }))
            }
        }
    }
}

if (process.env.npm_config_proxydev) {
    config.devServer.proxy = {
        '/mock': {
            target: 'http://192.168.185.107:8020/usercenter/',
            changeOrigin: true,
            pathRewrite: {
                '^/mock': ''
            }
        }
    }
}
if (process.env.npm_config_deploy) {
    let options = {
        ip: process.env.VUE_APP_IP,
        user: process.env.VUE_APP_USER,
        password: process.env.VUE_APP_PASSWORD,
        src: resolve(process.env.VUE_APP_SRC),
        dist: process.env.VUE_APP_DIST
    }
    config.configureWebpack.plugins.push(new WebpackScpPlugin(options))
}

module.exports = config
