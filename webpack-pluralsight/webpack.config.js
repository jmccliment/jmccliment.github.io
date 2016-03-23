module.exports = {
    entry: ['./src/utils.js',  "./src/app.js"]
    , output: {
        filename: "bundle.js"
    }
    , module: {
        preLoaders: [
            {
                test: /\.js$/
                , exclude: /node_moduels/
                , loader: 'jshint-loader'
            }
        ]
        , loaders: [
            {
                test: /\.es6$/,
                exclude: /node_moduels/,
                loader: 'babel-loader'
            }
        ]
    }
    , resolve: {
        extensions: ['', '.js', '.es6']
    }
    , watch: true
    
};