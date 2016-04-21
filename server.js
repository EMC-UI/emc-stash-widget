var express = require('express');
var tally = require('tally');
var app = express();

app.get('/stats/userStats', function (req, res) {
    tally.userStats(7).then(function(result) {
        res.json(result);
    });
});

app.get('/stats/projectStats', function (req, res) {
    tally.projectStats(7).then(function(result) {
        res.json(result);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

tally.createData(30);

app.use(express.static('.'));
