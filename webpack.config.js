var path = require('path');

module.exports = {
    output: {
        filename: "./[name]/bundle.js",
        
    },
    entry: {
        input:  ["./input/demo.js"],
        modal:  ["./modal/demo.js"],
        hoc:    ["./hoc/demo.js"],
        parent: ["./parent/demo.js"]
    },
    devtool:"source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        contentBase: [path.join(__dirname, "./hoc")],
        hot: true
    }
};
