const path = require('path');

const TerserPlugin         = require("terser-webpack-plugin");
const HtmlWebpackPlugin    = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'progressSteps.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
			}
		],
	},
	plugins: [
		new TerserPlugin({
			parallel: true
		}),
		new HtmlWebpackPlugin({
			template : './demo/demoTemplate.html',
			title: "Progress Steps",
			filename : path.join(__dirname, "./demo/index.html")
		})
	],
	optimization: {
		minimize: true
	},
	devtool: 'source-map',
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
	}
};