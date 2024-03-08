const task= require("../dataBase/model/taskSchema")




const getAllTask = async(req , res) => {

    const allData= await task.find()
    if(allData){
        res.status(200).json(allData)
    }else{
        res.status(400).json("no data found")
    }

}

const getMatchedTask = async (req, res) =>{
    try {
        const {id}=req.params;
        const matchedTask=await task.aggregate([  { $match : { projectId : id } },
            res.status(200).json(matchedTask)
    ])
        
    } catch (error) {
        res.status(400).json(error)
    }
}


const postTask = async(req , res) => {

    const {...data} = await req.body;
    console.log(data);

    const postdata=await task.create(data)
    if(postdata){
        res.status(200).json(postdata)
    }else{
        res.status(400).json("data not posted")
    }

}


const putOneTask = async(req , res) => {

    const {...data}=req.body;
    const {id} = req.params;
    const editedData= await task.findByIdAndUpdate(id , data)
    if(editedData){
        res.status(200).json(editedData)
    }else{
        res.status(400).json("updae is failed")
    }

}


const deleteOneTask = async(req , res) => {

    const {id} = req.params;
    console.log(id);

    const deleteRes=await task.findByIdAndDelete(id)
    if(deleteRes){
        res.status(200).json(deleteRes)
    }else{
        res.status(400).json("delete failed")
    }

}


const getOneTask = async(req , res) => {

    const {id}=req.params

    const singleData=await task.findById(id)
    if(singleData){
        res.status(200).json(singleData)
    }else{
        res.status(400).json("not found")
    }

}


module.exports = {getAllTask , postTask , putOneTask , deleteOneTask , getOneTask , getMatchedTask}