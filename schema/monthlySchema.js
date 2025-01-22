const { default: mongoose } = require("mongoose");

const monthlySchema = mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    creator: {
        type: String
    },
    day: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    }
});

<<<<<<< HEAD
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
=======
const Mschema = mongoose.model("Mschema", monthlySchema);
module.exports = Mschema;
>>>>>>> eea10cb67d5a44792ec02ef0faffac6377f02bde
