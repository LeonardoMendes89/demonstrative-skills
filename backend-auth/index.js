var express = require('express');
var sequelize = require('sequelize');
var cors = require('cors');
var port = 3004;
var app = express();
/*ORM sequelize em typescript*/
app.listen(port, function () {
    console.log("online in port: " + port);
});
