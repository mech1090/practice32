const User = require('../model/user.model')


const getEmail = (fields)=>{
    return User.findOne(fields)
}

const createEntries = (entries)=>{
    return User.create(entries)
}

module.exports = {getEmail,createEntries}