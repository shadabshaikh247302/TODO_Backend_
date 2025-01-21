<<<<<<< HEAD
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,   
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String
    }

})

const Uschema = mongoose.model("Uschema",userSchema)
=======
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,   
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String
    }

})

const Uschema = mongoose.model("Uschema",userSchema)
>>>>>>> 35700e10c5bcf2b3cadd5613a041d48be0bf2b5f
module.exports = Uschema