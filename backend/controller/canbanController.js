const kanban = require("../dataBase/model/kanbanSchema")




const getAllData = async(req , res) => {

    const allData= await kanban.find()
    if(allData){
        res.status(200).json(allData)
    }else{
        res.status(400).json("no data found")
    }

}


const postData = async(req , res) => {

    const {...data} = await req.body;
    console.log(data);

    const postdata=await kanban.create(data)
    if(postdata){
        res.status(200).json(postdata)
    }else{
        res.status(400).json("data not posted")
    }

}


const putData = async(req , res) => {

    const {...data}=req.body;
    const {id} = req.params;
    console.log(data , id);

    const editedData= await kanban.findByIdAndUpdate(id , data)
    if(editedData){
        res.status(200).json(editedData)
    }else{
        res.status(400).json("updae is failed")
    }

}


const deleteData = async(req , res) => {

    const {id} = req.params;
    console.log(id);

    const deleteRes=await kanban.findByIdAndDelete(id)
    if(deleteRes){
        res.status(200).json(deleteRes)
    }else{
        res.status(400).json("delete failed")
    }

}


const getOneData = async(req , res) => {

    const {id}=req.params

    const singleData=await kanban.findById(id)
    if(singleData){
        res.status(200).json(singleData)
    }else{
        res.status(400).json("not found")
    }

}


module.exports = {getAllData , postData , putData , deleteData , getOneData}