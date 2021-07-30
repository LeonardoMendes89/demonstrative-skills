var port = 3004;
var cors = require('cors');
var express = require('express');
var app = express();
app.get('/auth', function (req, res) {
});
app.listen(port, function () {
    var msg = "online into port :" + port;
    console.log(msg);
});
