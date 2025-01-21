<<<<<<< HEAD
const { default: mongoose } = require("mongoose");

const monthlySchema = mongoose.Schema({
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

const Mschema = mongoose.model("Mschema",monthlySchema)
=======
const { default: mongoose } = require("mongoose");

const monthlySchema = mongoose.Schema({
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

const Mschema = mongoose.model("Mschema",monthlySchema)
>>>>>>> 35700e10c5bcf2b3cadd5613a041d48be0bf2b5f
module.exports = Mschema