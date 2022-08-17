const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/museum-russia/'
        : '/',
    configureWebpack: {
        devServer: {
            historyApiFallback: true
        }
    }
})
