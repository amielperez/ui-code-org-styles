const express = require('express');
const path = require('path');
const app = express();

const port = process.argv[2] || 8080;

app.use(express.static(path.resolve(__dirname, structure, 'assets')));

app.listen(port, function () {
    console.log('Server started. Listening at port', port);
});
