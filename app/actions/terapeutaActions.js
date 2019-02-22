const Terapeuta = require("../models/Terapeutas");

const createTerapeuta = (data) =>{
    return User.create(data);
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

const getDates = () => {

}

module.exports={
    createTerapeuta,
    getUserByEmail,
    getUserById,
    getAllAsignedUsers
}