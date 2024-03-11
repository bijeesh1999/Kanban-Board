
const { ObjectId } = require('mongodb');
const taskAssign = require ("../../dataBase/model/taskAssignSchema")



const getAssignedTask = async (req,res) =>{
    try {
        const {id} = req.params
        console.log(id);
        if(id){
            const matchedTasks = await taskAssign.aggregate([{
                $match:{
                    empId:id
                }
        }])
        res.status(200).json(matchedTasks)
        }
    } catch (error) {
        console.log(error);
    }

}



const createAssignedTask = async(req , res) =>{
    try {
        const {...assignedTask} = req.body;
        console.log(assignedTask);

        if(assignedTask){
            const isCreate = await taskAssign.create(assignedTask)
            if(isCreate){
                res.status(200).json(isCreate)
            }else{
                res.status(400).json("somethig went wrong")
            }
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {createAssignedTask , getAssignedTask}