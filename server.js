var express = require('express');
var app = express();
var userStatsMock = require('./mock/userStats.json');
var projectStatsMock = require('./mock/projectStats.json');

app.get('/hello', function (req, res) {
    res.send('hello world!');
})

app.get('/stats/userStats', function (req, res) {
    res.json(userStatsMock);
});

app.get('/stats/projectStats', function (req, res) {
    res.json(projectStatsMock);
});

app.get('/stats/repoStats', function (req, res) {
    console.log('not implemented');
    res.json({});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use(express.static('.'));
