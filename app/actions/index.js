const authActions = require("./authActions");
const userActions = require("./userActions");
const terapeutaActions = require("./terapeutaActions");

module.exports={
    ...authActions,
    ...userActions,
    terapeutaActions
}