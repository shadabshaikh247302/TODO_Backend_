const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    }
});

<<<<<<< HEAD
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
=======
const Uschema = mongoose.model("Uschema", userSchema);
module.exports = Uschema;
>>>>>>> eea10cb67d5a44792ec02ef0faffac6377f02bde
