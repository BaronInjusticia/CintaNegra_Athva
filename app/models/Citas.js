const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitasSchema = new Schema({
    fecha:{
        type: Date,
        required: true,
    },
    pago:{
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model("citas", CitasSchema)