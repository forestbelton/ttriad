module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/built'
    },
    resolve: {
        alias: {
            less: __dirname + '/less',
            data: __dirname + '/data'
        }
    },
    module: {
        loaders: [
            { test: /.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    }
};
