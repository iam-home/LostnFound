const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(5000, function() {
 console.log('listening on 5000');
});

// const path = require('path');
// app.use('/CSS', express.static(path.join(__dirname, '..', 'CSS')));

app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/test', function(req, res) {
 res.sendFile(path.join(__dirname, '.', 'HTML', 'test.html'));
});