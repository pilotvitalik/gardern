const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');	
const CleanCSSPlugin = require('less-plugin-clean-css');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
		publicPath: 'public/'
	},
	devServer: {
		overlay: true
	},
	optimization: {
	    splitChunks: {
	      cacheGroups: {
	        styles: {
	          name: 'styles',
	          test: /\.css$/,
	          chunks: 'all',
	          enforce: true,
	        },
	      },
	    },
	    minimize: true,
	    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	  },
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
			    test: /\.css$/,
        		use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		]
	},
	plugins: [
	    new MiniCssExtractPlugin({
	      filename: '[name].css',
	      chunkFilename: '[id].css',
	    }),
	  ],
}