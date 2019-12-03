const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'index.js',
		publicPath: 'public/'
	},
	module: {
		rules: [
		  {
		  	test: /\.js$/,
		  	loader: 'babel-loader',
		  	exclude: '/node_modules/'
		  }
		]
	},
	devServer: {
		overlay: true
	}
}