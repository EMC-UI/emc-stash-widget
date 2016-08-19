var express = require('express');
var tally = require('tally');
var app = express();
var url = require('url');
var userStatsMock = require('./mock/userStats.json');
var projectStatsMock = require('./mock/projectStats.json');

app.get('/stats/userStats', function (req, res) {
    // var urlParts = url.parse(req.url, true);
    // tally.userStats(urlParts.query.prevDays).then(function(result) {
    //     res.json(result);
    // });
    res.json(userStatsMock);
});

app.get('/stats/projectStats', function (req, res) {
    // var urlParts = url.parse(req.url, true);
    // tally.projectStats(urlParts.query.prevDays).then(function(result) {
    //     res.json(result);
    // });
    res.json(projectStatsMock);
});

app.get('/stats/repoStats', function (req, res) {
    //var urlParts = url.parse(req.url, true);
    //tally.repoStats(urlParts.query.prevDays).then(function(result) {
    //    res.json(result);
    //});
    res.json({});
});

app.get('/create', function(req, res) {
    tally.createData(30);
    res.send('building');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use(express.static('.'));
