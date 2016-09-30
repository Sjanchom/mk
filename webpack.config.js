var path = require('path');
var webpack = require('webpack');

var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {

    devtool: 'eval-cheap-module-source-map',

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        path.join(__dirname, 'src/client.js')
    ],

    output: {
        filename: '[name].js',
        chunkFilename: "[name].js",
        path: path.join(__dirname, 'static', 'build'),
        publicPath: 'http://localhost:8080/build/'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel'
            }, {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file?name=[name].[ext]'
            }, {
                test: /\.ico$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    },

    resolve: {
        extensions: [
            '', '.json', '.js', '.jsx'
        ],
        root: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'BROWSER': true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true,
        inline: false,
        historyApiFallback: true

    }

};
