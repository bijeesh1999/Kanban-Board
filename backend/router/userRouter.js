const express=require("express");
const {userRegister , userLogin} = require("../controller/userAdmin/user/userController")
const Router=express.Router();



Router.route("/register").post(userRegister)
Router.route("/login").post(userLogin)



module.exports=Router