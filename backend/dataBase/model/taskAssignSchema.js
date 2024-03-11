const mongoose = require('mongoose')


const assignedTaskSchema = mongoose.Schema({

    empId:String,
    projectId:String,
    taskId:{
        type: mongoose.Schema.Types.ObjectId
    }

},{
    timestamps:true
})

module.exports = mongoose.model("assingedTask",assignedTaskSchema)