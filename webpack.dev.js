const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
    mode: 'development',
    output: {
        publicPath: '/dist/',
    },
    devServer: {
        open: true,
        port: 5500, 
        // makes sure that liveReload is enabled
        hot: false, 
        liveReload: true, 
        host: '0.0.0.0', 
    }
});