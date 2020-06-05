var client = require('scp2')

class WebpackScpPlugin {
    constructor (options) {
        this.options = {
            port: 22
        }
        Object.assign(this.options, options)

        if (!this.options.ip || !this.options.src || !this.options.dist || !this.options.user || !this.options.password) {
            throw new Error('[webpack-scp-plugin] options{ip,user,password,src,dist} cannot be null')
        }
    }
    apply (compiler) {
        var options = this.options
        function scpFile () {
            const remote = `${options.user}:${options.password}@${options.ip}:${options.port}:${options.dist}`
            console.log('[webpack-scp-plugin] scp begin...')
            client.scp(options.src, remote, (err) => {
                if (err) {
                    console.log('[webpack-scp-plugin] scp faild!' + err.message)
                } else {
                    console.log('[webpack-scp-plugin] scp successful')
                }
            })
        }
        if (compiler.hooks) {
            compiler.hooks.done.tap('WebpackScpPlugin', () => {
                scpFile()
            })
        } else {
            compiler.plugin('done', () => {
                scpFile()
            })
        }
    }
}

module.exports = WebpackScpPlugin
