const stage = require("../dataBase/model/progresSchema")


const getAllProgress = async(req , res) => {

    const allProgress= await stage.find()
    if(allProgress){
        res.status(200).json(allProgress)
    }else{
        res.status(400).json("no data found")
    }

}

const getMatchProgress = async (req , res) =>{
    const {id} = req.params;
    const MatchProgress= await stage.aggregate([
        {
            $match:{
                projectId:id
            }
        }
    ])
    if(MatchProgress){
        res.status(200).json(MatchProgress)
    }else{
        res.status(400).json("no data found")
    }
}


const postProgress = async(req , res) => {

    const {...data} = await req.body;
    console.log(data);

    const postProgress=await stage.create(data)
    if(postProgress){
        res.status(200).json(postProgress)
    }else{
        res.status(400).json("data not posted")
    }

}


const putOneProgress = async(req , res) => {

    const {...data}=req.body;
    const {id} = req.params;
    console.log(data , id);

    const editedProgress= await stage.findByIdAndUpdate(id , data)
    if(editedProgress){
        res.status(200).json(editedProgress)
    }else{
        res.status(400).json("updae is failed")
    }

}


const deleteProgress = async(req , res) => {

    const {id} = req.params;
    console.log(id);

    const deletedProgress=await stage.findByIdAndDelete(id)
    if(deletedProgress){
        res.status(200).json(deletedProgress)
    }else{
        res.status(400).json("delete failed")
    }

}


const getOneProgress = async(req , res) => {

    const {id}=req.params
    console.log(id);
    const singleProgress=await stage.findById(id)
    if(singleProgress){
        res.status(200).json(singleProgress)
    }else{
        res.status(400).json("not found")
    }

}


module.exports = {getAllProgress , postProgress , putOneProgress , deleteProgress , getOneProgress , getMatchProgress}