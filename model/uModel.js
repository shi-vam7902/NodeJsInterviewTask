const mongoose = require('mongoose')

const schema = mongoose.Schema;

const UserModel = schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    
})

module.exports = mongoose.model('User',UserModel)