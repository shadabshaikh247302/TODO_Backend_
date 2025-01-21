<<<<<<< HEAD
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
=======
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
>>>>>>> 35700e10c5bcf2b3cadd5613a041d48be0bf2b5f
module.exports = TDschema