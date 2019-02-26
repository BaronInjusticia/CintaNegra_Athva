const Admin = require("../models/Admin");
const Terapeuta = require("../models/Terapeutas");
const Consultorio = require("../models/Consultorio");
const Citas = require("../models/Citas");
const User = require("../models/User.js");
//*Actions Users

const getUserByName = (first_name) =>{
    return User.findOne({first_name:first_name});
}
const getUserByEmail = (email) =>{
    return User.findOne({email:email});
}
const getUserById = (id) =>{
    return User.findOne({_id:id, is_active: true}).select("-password").populate("nombre");
}
const getAllActiveUsers = () =>{
    return User.find({is_active: true}).select("-password").populate("nombre");
}
const getAllUsersFarmacovigilancia = () =>{
    return User.find({farmacovigilancia: true}).select("-password").populate("nombre");
}
const getUserFarmacovigilancia = () =>{
    return User.findOne({farmacovigilancia: true}).select("-password").populate("nombre");
}
const getAllUserSubscription = (subscription) => {
    return User.find({subscription: "Estandar", subscription: "Estudiante"}).select("-password").populate("nombre");
}
const getUserSubscription = (subscription) => {
    return User.findOne({subscription: "Estandar", subscription: "Estudiante"}).select("-password").populate("nombre");
}

const getAllUserTerapiaEtapa = (terapia_etapa) => {
    return User.find({terapia_etapa: "RX", terapia_etapa: "TX", terapia_etapa:"MX"}).select("-password").populate("nombre");
}
const getUserTerapiaEtapa = (terapia_etapa) => {
    return User.findOne({terapia_etapa: "RX", terapia_etapa: "TX", terapia_etapa:"MX"}).select("-password").populate("nombre");
}
//*Actions Terapeutas

const createTerapeuta = (data) =>{
    return Terapeuta.create(data);
}
const getTerapeutaByEmail = (email) =>{
    return Terapeuta.findOne({email:email})
}
const getTerapeutaById = (id) =>{
    return Terapeuta.findOne({_id:id}).select("-password").populate("nombre");
}
const getAllAsignedTerapeuta = () =>{
    return Terapeuta.find({id:id}).select("-password").populate("nombre");
}
const getTerapeutaByFirstName = () =>{
    return Terapeuta.find({first_name:first_name}).select("-password").populate("nombre");
}
//* Actions Citas y consultorios

const getCitas = () => {
    return Citas.find({pago: true}).select();
}
const createConsultorio = () => {
    return Consultorio.create(data);
}

module.exports={
    createTerapeuta,
    getUserByEmail,
    getUserById,
    getAllActiveUsers,
    getCitas,
    getTerapeutaByEmail,
    getTerapeutaById,
    getAllAsignedTerapeuta,
    createConsultorio,
    getAllUsersFarmacovigilancia,
    getUserFarmacovigilancia,
    getUserByName,
    getAllUserSubscription,
    getUserSubscription,
    getAllUserTerapiaEtapa,
    getUserTerapiaEtapa,
    getTerapeutaByFirstName
}