module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/style/variable.scss";
                    @import "@/style/mixin.scss"; 
                    @import "@/style/common/antd-reset.scss";
                `
            },
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://116.62.64.183',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};