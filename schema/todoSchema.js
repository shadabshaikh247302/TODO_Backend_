
const { default: mongoose } = require("mongoose");

const todoSchema = mongoose.Schema({
    tittle:{
        type:String,
        required:true
    },
    creator:{
        type:String
    },
    day:{
        type:String
    },
    month:{
        type:String
    },
    year :{
        type : String
    }

})



const TDschema = mongoose.model("TDschem",todoSchema)

<<<<<<< HEAD
module.exports = TDschema
=======
module.exports = TDschema
>>>>>>> eea10cb67d5a44792ec02ef0faffac6377f02bde
