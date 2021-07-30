const port = 3004
import auth from './config/auth.js'
import cors from 'cors' 
import express from 'express'
const app = express()

app.get('/auth',(req,res)=>{
    return res.status(200)
              .json(auth)
              .catch(err)
})

app.listen(port,()=>{
    let msg :string = `online into port :${port}`
    console.log(msg)
})