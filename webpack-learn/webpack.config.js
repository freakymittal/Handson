const webpack = require('webpack');
const path = require('path');

const config = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './app.js',
		img: './app2.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
		{
		test: /\.sass$/,
		use: [
			'style-loader',
			'css-loader',
			'sass-loader'
		]
	}, 
	{
		test: /\.(png|jpg)$/,
		use: [{
			loader: 'url-loader',
			options: {limit: 10000}
		}]
	}]
	}
	
}
module.exports = config;