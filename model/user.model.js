const mongoose = require('mongoose')


const SchemaDef = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:tru
    }
},{
    collection : "Practice 32 User"
})

const User = mongoose.model('User',SchemaDef)

module.exports = User