var path = require("path");
var nodeModulesPath = path.join(__dirname, 'node_modules');

var config = {
    webpack: {
        entry: {
            angular: [
                'angular2polyfills',
                'angular2',
                'http',
                'router'
            ]
        },
        resolveLoader: {
            root: nodeModulesPath
        },
        resolve: {
            extensions: ['', '.tsx', '.ts', '.js', '.less', '.css'],
            modulesDirectories: ["node_modules", "resources"],
            alias: {
                'angular2polyfills': path.join(nodeModulesPath, 'angular2', 'bundles', 'angular2-polyfills.js'),
                'angular2': path.join(nodeModulesPath, 'angular2', 'bundles', 'angular2.js'),
                'http': path.join(nodeModulesPath, 'angular2', 'bundles', 'http.js'),
                'router': path.join(nodeModulesPath, 'angular2', 'bundles', 'router.js')
            }
        },
        output: {
            path: path.join(__dirname, 'build'),
            filename: '[name]_[chunkhash].js'
        }
    }
}

module.exports = config;