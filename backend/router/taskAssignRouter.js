const express = require("express")
const {createAssignedTask , getAssignedTask} = require("../controller/taskAssign/taskAssignController")


const Router = express.Router();


Router.route('/').post(createAssignedTask)
Router.route("/:id").get(getAssignedTask)



module.exports = Router