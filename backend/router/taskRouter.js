const express = require("express")

const {getAllTask , postTask , putOneTask , deleteOneTask , getOneTask , getMatchedTask} =require("../controller/taskController")


const Router=express.Router();



Router.route('/').get(getAllTask).post(postTask);

Router.route("/:id").get(getOneTask).put(putOneTask).delete(deleteOneTask);

Router.route("/tasks/:id").get(getMatchedTask)


module.exports=Router