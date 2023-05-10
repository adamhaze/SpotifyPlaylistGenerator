const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer','Buffer']
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            qs: ['qs','querystring']
        })
    ],
    resolve: {
        fallback: {
            buffer: require.resolve("buffer"),
            querystring: require.resolve("querystring")
        }
    },
    devServer: {
        client: {
            webSocketURL: 'ws://172.20.74.217:30008/ws',
        },
    },
}