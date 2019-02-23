const Terapeuta = require("../models/Terapeutas");
const User = require("../models/User");
const Citas = require("../models/Citas");

const createTerapeuta = (data) =>{
    return Terapeuta.create(data);
}

const getUserByEmail = (email) =>{
    return User.findOne({email:email})
}

const getUserById = (id) =>{
    return User.findOne({_id:id, is_active: true}).select("-password").populate("posts");
}

const getAllAsignedUsers = () =>{
    return User.find({is_active: true}).select("-password").populate("posts");
}

const getCitas = () => {
    return Citas
}

const createCita =(Cita)=>{
    return Citas.create(data);
}

module.exports={
    createTerapeuta,
    getUserByEmail,
    getUserById,
    getAllAsignedUsers
}