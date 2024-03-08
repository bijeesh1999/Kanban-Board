const express = require('express');
const Router = express.Router();


const {getAllProgress , postProgress , putOneProgress , deleteProgress , getOneProgress} = require("../controller/progressController")

Router.route("/").get(getAllProgress).post(postProgress)

Router.route("/:id").get(getOneProgress).put(putOneProgress).delete(deleteProgress)


module.exports = Router