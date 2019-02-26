const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const SALT_FACTOR = 12;

const Schema = mongoose.Schema;


const TerapeutaSchema = new Schema({
    first_name:{
        type:String,
        required: true,
        ref:"nombre"
    },
    last_name:{
        type:String,
        required: true,
        ref: "nombre"
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    birth_date:{
        type:Date,
        required:true
    },
});

TerapeutaSchema.pre("save", function(next){
    let terapeuta = this;
    if(!terapeuta.isModified("password")){return next();}
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(terapeuta.password, salt, function(err,hash){
            if(err) return next(err);
            terapeuta.password =hash;
            next()
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function(){
    return this.toString()
}

module.exports = mongoose.model("terapeuta", TerapeutaSchema)