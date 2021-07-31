const port    = 3004
const express = require('express')
const app     = express()
const db      = require('./conn/knex')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    db.select('*').table('test').then(test => {
        res.json(test)
    })
})
app.post('/insert',(req,res)=>{

})
app.delete('/delete:id',(req, res)=>{

})
app.put('/update/:id',(req,res)=>{

})
app.listen(port,() => console.log(`online into port:${port}, ${db}`))





