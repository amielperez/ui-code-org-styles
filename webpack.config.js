const path = require('path');

const config = {
    entry: './src/run.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets', 'js'),
    },
}

module.exports = config;