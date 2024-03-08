const mongoose=require("mongoose")



const projectSchema=mongoose.Schema({

    project:String,
    desc:String,
    ownerId:String,
    role:String,
    projectId:String

},{
    timestamps:true
})


module.exports=mongoose.model("project" , projectSchema)