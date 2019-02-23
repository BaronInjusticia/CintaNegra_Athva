const User = require("../models/User.js");

const createUser = (data) =>{
    return User.create(data);
}

//const getAllUsers = () =>{
    //return User.find({is_active: true}).select("-password").populate("posts");
//}

//const deleteUserById = (id) => {
    //return User.findByIdAndUpdate({_id:id, is_active:true}, {$set:{is_active:false}},{new:true})
//}

module.exports = {
    createUser 
}