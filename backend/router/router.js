const express = require("express")

const {getAllData , postData , putData , deleteData , getOneData} =require("../controller/canbanController")


const Router=express.Router();



Router.route('/').get(getAllData).post(postData)

Router.route("/:id").get(getOneData).put(putData).delete(deleteData)


module.exports=Router