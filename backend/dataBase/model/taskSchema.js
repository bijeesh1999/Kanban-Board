const mongoose =require("mongoose")


const taskSchema = mongoose.Schema({

    title: String,
    deSc: String,
    option:String,
    projectId:String,
    adminId:String,
    expDate:Date

},{
    timestamps:true
})


module.exports = mongoose.model("task" , taskSchema)