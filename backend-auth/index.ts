const express   = require('express')
const sequelize = require('sequelize') 
const cors      = require('cors')

const port = 3004
const app  = express()

/*ORM sequelize em typescript*/
app.listen(port,() =>{
        console.log(`online in port: ${port}`)
})
