const express = require('express');

const app = express();
const port = require('yargs').argv.port || 8080;

app.get('*', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`[INFO} Listening on port ${port}...`);
});