const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin   = require("css-minimizer-webpack-plugin");
const TerserPlugin         = require("terser-webpack-plugin");
const HtmlWebpackPlugin    = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/app/ExpnadingCards.window.exports.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'expandingCards.bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/i,
				exclude : /demoTemplate.html$/i,
				loader: "html-loader",
			},
			{ test: /\.txt$/, use: 'raw-loader' },
		],
	},
	plugins: [
		new TerserPlugin({
			parallel: true
		}),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template : './demo/demoTemplate.html',
			title: "Expanding Cards",
			filename : path.join(__dirname, "./demo/index.html")
		})
	],
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin()
		],
		minimize: true
	}

};