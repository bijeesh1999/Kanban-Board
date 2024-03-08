const express=require('express')
const {adminLogin}=require("../controller/userAdmin/admin/adminLogin")
const Router=express.Router()


Router.route("/login").post(adminLogin).post()


module.exports=Router