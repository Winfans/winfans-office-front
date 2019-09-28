// const path = require('path');
module.exports = {
    // 是否打包sourcemap
    productionSourceMap: false,
    //部署应用包时的基本 URL
    publicPath: '/',
    assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    chainWebpack: config => {
        // config.module
        //     .rule('vue')
        //     .use('vue-loader')
        //     .loader('vue-loader')
        //     .tap(options => {
        //         // 修改它的选项...
        //         return options
        //     });

        // config.module
        //     .rule('less')
        //     .use('less-loader')
        //     .loader('less-loader')
        //     .tap(options => {
        //         // 修改它的选项...
        //         return options
        //     });
        // 图片压缩
        // config.module
        //     .rule('images')
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end()

        //     config.plugin('workbox');
        //     config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views')); // 配置别名

        // config.module
        //     .rule('less')
        //     .use('less-loader')
        //     .loader('less-loader')
        //     .tap(options => {
        //         修改它的选项...
        // return options
        // });
        // const imagesRule = config.module.rule('images');
        // imagesRule
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end()
    },
    // pwa: {
    //     iconPaths: {
    //         favicon32: 'logo.png',
    //         favicon16: 'logo.png',
    //         appleTouchIcon: 'logo.png',
    //         maskIcon: 'logo.png',
    //         msTileImage: 'logo.png'
    //     }
    // },
    // // css相关配置
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
        proxy: {
            '/menu': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
            '/auth': {
                target: 'http://localhost:12649',
                changeOrigin: true
            },
        },
        // pluginOptions: {}
    }

};
