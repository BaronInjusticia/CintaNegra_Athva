const authActions = require("./authAction");
const userActions = require("./userActions");

module.exports={
    ...authActions,
    ...userActions
}