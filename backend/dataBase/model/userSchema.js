const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    userName:String,
    emailId:String,
    password:String,
    token:String,
    role:String
},{
    timestamps:true
})

module.exports = mongoose.model("user",userSchema)