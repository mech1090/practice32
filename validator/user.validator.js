const Joi = require('joi')

const userValidate = (fields)=>{
    const userSchema = Joi.object({
        email:Joi.string().min(8).max(32).required(),
        password:Joi.string().min(6).max(32).required()
    })

    const {error,value} = userSchema.validate(fields)
    return {error,value}
}

module.exports = {userValidate}