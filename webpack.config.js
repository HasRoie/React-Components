/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

module.exports = {
    output: {
        filename: 'main.js'
    },

    cache: true,
    debug: true,
    devtool: false,
    entry: './src/scripts/<%= pkg.mainInput %>.jsx',

    stats: {
        colors: true,
        reasons: true
    },

    module: {
        preLoaders: [{
            test: '\\.js$',
            exclude: 'node_modules',
            loader: 'jshint'
    }],

        loaders: [{
                test: /\.css$/,
                loader: 'style!css'
    }, {
                test: /\.gif/,
                loader: 'url-loader?limit=10000&minetype=image/gif'
    }, {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&minetype=image/jpg'
    }, {
                test: /\.png/,
                loader: 'url-loader?limit=10000&minetype=image/png'
    },
            {
                test: /\.jsx$/,
                loaders: ['jsx-loader?harmony&insertPragma=React.DOM']
    },
            {
                test: /\.es6\.js$/,
                loader: 'es6-loader'
    }
    ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.es6.js'],

        alias: {
            app: __dirname + '/src/scripts/app.js',
            pages: __dirname + '/src/scripts/pages',
            mixins: __dirname + '/src/scripts/mixins',
            components: __dirname + '/src/scripts/components',
            composits: __dirname + '/src/scripts/composits',
            actions: __dirname + '/src/scripts/actions',
            schemas: __dirname + '/src/scripts/schemas',
            styles: __dirname + '/src/styles'
        }
    }
};
