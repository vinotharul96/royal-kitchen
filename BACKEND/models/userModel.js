
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    registerUsername : {
        type : String,
        required : true
    },
    registerEmail : {
        type : String,
        required : true 
    },
    registerPassword : {
        type : String,
        required : true
    },
    
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel 