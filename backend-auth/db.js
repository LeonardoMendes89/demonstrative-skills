var Sequelize = require('sequelize').Sequelize;
var db = new Sequelize('test', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});
var testing = db.define('new_test', {
    test: {
        type: Sequelize.STRING
    }
});
testing.create({
    test: 'test sequelize in demonstrate to auth route'
});
testing.sync({ force: true });
