const {
    resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const url = require('url')
const publicPath = '/etwcrowdtestservice/'
const version = new Date().toLocaleDateString()

module.exports = (options = {}) => ({
    entry: {
        vendor: './src/vendor',
        index: './src/main'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: options.dev ? '[name].js' : '[name]-[chunkhash]-' + version + '.js',
        chunkFilename: 'js/[id]-[chunkhash]-' + version + '.js',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/, 
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: ExtractTextPlugin.extract({fallback:'vue-style-loader', use:'css-loader',publicPath: '/etwcrowdtestservice/css/'}),
                                less: ExtractTextPlugin.extract({fallback:'vue-style-loader', use:'css-loader!less-loader',
                                    publicPath: '/etwcrowdtestservice/css/'}),
                                i18n: '@kazupon/vue-i18n-loader'
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: 'css-loader!postcss-loader!less-loader',
                    publicPath: '/etwcrowdtestservice/css/'
                })
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        root: resolve(__dirname, 'src'),
                        attrs: ['img:src', 'link:href']
                    }
                }]
            },
            {
                test: /favicon\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: options.dev ? 'img/[name].[ext]' : 'img/[name]-[hash].[ext]',
                        publicPath: options.dev ? '/assets/' : '/etwcrowdtestservice/'
                    }
                }]
            }
        ],
        noParse: [/html2canvas/]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css', 
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8011,
        proxy: {
            '/rest/*': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/rest': ''
                }
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    },
    devtool: options.dev ? '#eval-source-map' : ''
})