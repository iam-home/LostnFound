/**
 * npm 설치안됨. vscode에서 express 설치하고 일로 옮겨라
 * nodemon
 */

const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(5000, function() {
 console.log('listening on 5000');
});

// const path = require('path');
// app.use('/CSS', express.static(path.join(__dirname, '..', 'CSS')));



app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname, '.', 'HTML', 'index.html'));
});

app.get('/test', function(req, res) {
 res.sendFile(path.join(__dirname, '.', 'HTML', 'test.html'));
});