const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
        mode:"production",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "node_modules/animate.css"),
					path.resolve(__dirname, "node_modules/aos/dist"),
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 8081,
		open: true,
		hot: true,
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".png"],
	},
	devtool: "inline-source-map",
};
