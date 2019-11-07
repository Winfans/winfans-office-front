module.exports = {
    // 是否打包sourcemap
    productionSourceMap: false,
    //部署应用包时的基本 URL
    publicPath: '/office',
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8080,//端口
        disableHostCheck: true,
        proxy: {
            '/menu': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
            '/auth': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
            '/team': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
            '/user': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
            '/customer': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
            '/written': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
        },
    }

};
