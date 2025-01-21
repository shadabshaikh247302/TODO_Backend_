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
module.exports = TDschema