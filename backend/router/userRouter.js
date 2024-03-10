const express=require("express");
const {userRegister , userLogin , getAllUsers} = require("../controller/userAdmin/user/userController")
const Router=express.Router();


Router.route("/").get(getAllUsers)
Router.route("/register").post(userRegister)
Router.route("/login").post(userLogin)



module.exports=Router