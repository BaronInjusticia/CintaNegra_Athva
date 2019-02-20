const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//TODO Exportar tipos de subscripciones

const Schema =mongoose.Schema;

const UserSchema = new Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    birth_date:{
        type: Date,
        required: true
    },
    gender:{
        type:String,
        enum:["Masculino","Femenino","Prefiero no especificar"],
        required: true
    },
    terapia:{
    type:String,
    enum:["TX", "RX", "VX"]
    },
    diagnose:{
        type:String,
        ref:"cie10array",
        required: true
    },
    pscifarmacologia:{
        type:Boolean,
        default: false,
        required: true
    },
    subscription_id:{
        type: Schema.Types.ObjectId,
        ref: "subscriptions"
    },
    is_active:{
        type:Boolean,
        default: true
    },
    terapeuta:{
        type:Boolean,
        default: false
    }
},{"collation":"users","timestamps": true});

UserSchema.pre("save", function(next){
    let user = this;
    if(!user.isModified("password")){return next();}
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err,hash){
            if(err) return next(err);
            user.password =hash;
            next()
        });
    });
});

mongoose.Types.ObjectId.prototype.valueOf = function(){
    return this.toString()
}

module.exports = mongoose.model("user", UserSchema)