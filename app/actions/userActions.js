const User = require("../models/User.js");

const createUser = () =>{
    return User.create(data);
}

const getUserByEmail = (email) =>{
    return User.findOne({email:email})
}

module.exports = {
    createUser, 
    getUserByEmail
}