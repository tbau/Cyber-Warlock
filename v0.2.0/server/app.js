const path = require('path');
const express = require('express');
__basedir = path.join(__dirname, '');

const app = express();
const port = 80;

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));

// app.use('/images', express.static('images'));
// app.use('/libs', express.static('libs'));
// app.use('/models', express.static('models'));
// app.use('/managers',express.static('managers'));
// app.use('/scenes',express.static('scenes'));

app.get('/',(req, res) => {
    res.sendFile(HTML_FILE);
})

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})