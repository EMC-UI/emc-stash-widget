var express = require('express');
var app = express();

app.get('/stats/repos', function (req, res) {
    res.json(
        [
            {name: "Project1", commits: 524, contrib: 2},
            {name: "project2", commits: 324, contrib: 5},
            {name: "Project3", commits: 142, contrib: 1},
            {name: "Project4", commits: 36, contrib: 10},
            {name: "Project5", commits: 12, contrib: 2},
        ]
    )
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use(express.static('.'));
