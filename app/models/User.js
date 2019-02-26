const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cie10 = require("cie10");
//TODO Exportar tipos de subscripciones


const SALT_FACTOR = 12;

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    
    first_name:{
        type:String,
        required: true,
        ref: "nombre"
    },
    last_name:{
        type:String,
        required: true,
        ref: "ref"
    },
    profile_image:{
        type:String
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
        required: true
    },
    gender:{
        type:String,
        enum: ["Masculino", "Femenino", "Prefiero no especificar"],
        required: true
    },
    subscription:{
        type: String,
        enum: ["Estandard", "Estudiante"]
    },
    terapeuta:{
        type:String
    },
    terapia_etapa:{
        type:String,
        enum:["RX","TX","MX"]
    },
    farmacovigilancia:{
        type: Boolean,
        default: false
    },
    //TODO Preguntarle a chacha nuestros codigos del cie10
    //diagnosis:{
        //  type:String,
        //enum:[cie10]
    //},
    //!LINEA DE SEPARACION
    is_active: {
        type: Boolean,
        default: true
    },
});

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