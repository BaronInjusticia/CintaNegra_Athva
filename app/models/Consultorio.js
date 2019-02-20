const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const ConsultorioSchema = new Schema({
    location:{
        type:String,
        required: true
    },
    photo:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("user", ConsultorioSchema)