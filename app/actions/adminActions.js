const Admin = require("../models/Admin");
const Terapeuta = require("../models/Terapeutas");
const Consultorio = require("../models/Consultorio");
const Citas = require("../models/Citas");
const User = require("../models/User.js");
//*Actions
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
//citas pagadas
const getCitas = () => {
    return Citas.find({pago: true}).select();
}
const getTerapeutaByEmail = (email) =>{
    return Terapeuta.findOne({email:email})
}
const getTerapeutaById = (id) =>{
    return Terapeuta.findOne({_id:id}).select("-password").populate("posts");
}
const getAllAsignedTerapeuta = () =>{
    return Terapeuta.find({id:id}).select("-password").populate("posts");
}
module.exports={
    createTerapeuta,
    getUserByEmail,
    getUserById,
    getAllAsignedUsers,
    getCitas
}

module.exports = {

}