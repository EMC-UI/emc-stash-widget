var express = require('express');
var app = express();
var pmongo = require('promised-mongo');

var getDbConnection = function () {
    return pmongo('mongodb://localhost:27017/tally');
};

var db = getDbConnection();

var getRepoStats = function() {
    return db.collection('projects').find();
};

app.get('/stats/repos', function (req, res) {
    getRepoStats().then(function(result) {
        res.json(result);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use(express.static('.'));
