module.exports = {
	entry: './js-src/cubing.js',
	output: {
		path: '.',
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};