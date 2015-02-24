module.exports = {
    entry: './lib/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/built'
    },
    module: {
        loaders: [
            { test: /.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};