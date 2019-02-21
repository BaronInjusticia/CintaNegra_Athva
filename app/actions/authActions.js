const jwt = require("jsonwebtoken");
const bcrypt =require("bcrypt");

const {SECRET_KEY} =require("../config");
const {createUser, getUserByEmail} = require("./userActions");

//*Expiracion Token
Date.prototype.addDays = (days) =>{
    var Date = new Date(this.valueof());
    Date.setDate(date.getDate()+days);
    return Date
}

const createToken = ({email, first_name, _id}) =>{
    const exp = new Date().addDays(1).getTime();

    const payload ={
        _id,
        mail,
        first_name,
        exp
    }

    return jwt.sign(payload, SECRET_KEY);
}

const signup = (data) => {
    return new Promise((resolve,reject)=>{
        createUser(data).then(
            (user)=>{
                const token = createToken(user)
                resolve(token)
            }
        ).catch(reject)
    });
};

const login = ({email, password}) => {
    return new Promise((resolve, reject)=>{
        getUserByEmail(email).then((user)=>{
            bcrypt.compare(password, user.password, (err, isvalue)=>{
                if(err) reject(err);
                isValid? resolve(createToken(user)) : reject(new Error("Password Invalido"))
            })
        }).catch(reject);
    })
};

module.exports ={
    signup,
    login
}