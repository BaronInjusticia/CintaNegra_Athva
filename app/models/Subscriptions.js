const mongoose = require("mongoose");

const Schema =mongoose.Schema;

const SubscriptionSchema = new Schema({
    standard:{
        type:Boolean,
        default: false,
        required: true
    },
    student:{
        type:Boolean,
        default: false,
        required: true
    }
});

module.exports = mongoose.model("subscription", SubscriptionSchema)