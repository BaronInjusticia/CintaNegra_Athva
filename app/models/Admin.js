const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const SALT_FACTOR = 12;

const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    
    first_name:{
        type:String,
        required: true
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
});

AdminSchema.pre("save", function(next){
    let admin = this;
    if(!admin.isModified("password")){return next();}
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(admin.password, salt, function(err,hash){
            if(err) return next(err);
            admin.password =hash;
            next()
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function(){
    return this.toString()
}

module.exports = mongoose.model("admin", AdminSchema)