const { Sequelize } = require('sequelize')
const db = new Sequelize('test','postgres','123456',{
    host:'localhost',
    dialect:'postgres'
})

let testing = db.define('new_test',{
    test:{
        type: Sequelize.STRING
    }
})

testing.create({
    test:'test sequelize in demonstrate to auth route'
})

testing.sync({ force: true })
//no banco de dados está com new_tests