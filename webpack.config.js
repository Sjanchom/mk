var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        'babel-polyfill',
        path.join(__dirname, 'src/client.js')
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'static', 'build'),
        publicPath: '/build/'
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
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
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
        ]
    }

};
