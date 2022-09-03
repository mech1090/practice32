const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
require('./db')


const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('TESTING OK')
})

app.get('*',(res,req)=>{
    res.send('BAD_REQUEST')
})

mongoose.connection.once('open',()=>{
    app.listen(config.get('port'),()=>{
        console.log(`Server is running on port ${config.get('port')}`)
    })
    console.log('DB CONNECTED')
})

