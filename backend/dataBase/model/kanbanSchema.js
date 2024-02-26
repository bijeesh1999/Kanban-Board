const mongoose =require("mongoose")


const kanbanSchema = mongoose.Schema({

    title: String,
    deSc: String,
    option:String,
    expDate:Date

},{
    timestamps:true
})


module.exports = mongoose.model("kanban" , kanbanSchema)