const mongoose = require("mongoose");

const CitasSchema = new Schema({
    cita:{
        type: Date,
        required: true,
    },
    pago:{
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model("citas", CitasSchema)