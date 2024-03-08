const mongoose=require('mongoose')


const progersShema = mongoose.Schema({


    status:String,
    projectId:String,
    adminId:String

},{
    timestamps:true
})

module.exports= mongoose.model("stage",progersShema)