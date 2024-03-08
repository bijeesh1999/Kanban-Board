const express = require("express")
const Router = express.Router();
const {getAllProjects , postProject , putOneProject , deleteOneProject , getOneProject , getFilterDataById} = require("../controller/projects/projectController")


Router.route("/").get(getAllProjects).post(postProject)


Router.route("/:id").get(getOneProject).put(putOneProject).delete(deleteOneProject)

Router.route("/match/:id").get(getFilterDataById)


module.exports= Router