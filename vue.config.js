module.exports = {
    devServer: {
        https: true,
        proxy: {
            '^/api': {
                target: 'https://localhost:6060',
                changeOrigin: true
            },
            '^/svc':{
                target: 'https://localhost:6060',
                changeOrigin: true
            }
        }
    }
}