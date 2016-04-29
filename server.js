var express = require('express');
var tally = require('tally');
var app = express();
var url = require('url');

app.get('/stats/userStats', function (req, res) {
    var urlParts = url.parse(req.url, true);
    tally.userStats(urlParts.query.prevDays).then(function(result) {
        res.json(result);
    });
});

app.get('/stats/projectStats', function (req, res) {
    var urlParts = url.parse(req.url, true);
    tally.projectStats(urlParts.query.prevDays).then(function(result) {
        res.json(result);
    });
});

app.get('/stats/repoStats', function (req, res) {
    //var urlParts = url.parse(req.url, true);
    //tally.repoStats(urlParts.query.prevDays).then(function(result) {
    //    res.json(result);
    //});
    res.json({});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

tally.createData(30);

app.use(express.static('.'));
