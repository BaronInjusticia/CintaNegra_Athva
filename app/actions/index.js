const authActions = require("./authActions");
const userActions = require("./userActions");
const terapeutaActions = require("./terapeutaActions");
const adminActions = require("./adminActions");


module.exports={
    ...authActions,
    ...userActions,
    terapeutaActions,
    adminActions
}