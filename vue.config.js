module.exports = {
    devServer: {
        https: true,
        proxy: {
            '^/auth': {
                target: 'https://localhost:2323',
                changeOrigin: true
            },
            '^/data/users':{
                target: 'https://localhost:2323',
                changeOrigin: true
            }
        }
    },

}