const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'production',
    watch: false, 
    output: {
        publicPath: 'auto', 
        clean: true, 
    }
})