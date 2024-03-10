const user = require("../../../dataBase/model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config();


const userRegister = async (req,res) =>{
    try {

        const {...data}=req.body
        const emailId=data.emailId;
        console.log(data);
        if(!(data.userName || data.emailid || data.password)){
            res.status(201).json("some fields are mandatory")
        }else{
            const isEmail=await user.findOne({emailId});
            if(isEmail){
                res.status(201).json('email already taken')
            }else{
                const hashPassword=await bcrypt.hash(data.password , 12);
                const isUserRegister = await user.create({
                    userName:data.userName,
                    emailId,
                    password:hashPassword
                })

                if(isUserRegister){
                    const token=jwt.sign(
                        {id:isUserRegister._id},"B2I2J2E2E2S2H2B2I2J2U2A2N2I2T2H2A2",{expiresIn:"10hr"}
                    )
                    isUserRegister.token=token;
                    isUserRegister.password=undefined
                    const options = {
                        expires:new Date(Date.now() + 10 * 60 * 60 * 1000 ),
                        httpOnly: false,
                      }
                      res.status(200).cookie("token", token,options)
                      .cookie("userId", isUserRegister._id.toString(), options).json({
                        success: true,
                        options,
                        isUserRegister
                    });
                }else{
                    res.status(400).json('something went to wrong')
                }

            }

        }
        
    } catch (error) {
        console.log(error);
    }
};

const userLogin = async (req,res) =>{

    try {

        const {emailId , password} = req.body;
    console.log(emailId , password);
        if(!(emailId && password)){
            res.status(201).json("some fields are mondatory");
        }else{
            const isUser= await user.findOne({emailId})
            if(isUser){
                const isPassword = await bcrypt.compare(password,isUser.password)
                if(isPassword){

                    const token= await jwt.sign({id:isUser._id,emailId},process.env.MY_SECRET_KEY,{expiresIn:"10hr"})
                    isUser.token=token;
                    isUser.password=undefined;
                    const options = {
                        expires:new Date(Date.now() + 10 * 60 * 60 * 1000 ),
                        httpOnly: false,
                      }
                      res.status(200).cookie("token", token,options)
                      .cookie("id", isUser._id.toString(), options)
                      .cookie("role",isUser.role)
                      .json({
                        success: true,
                        options,
                        isUser
                    });
                      

                }else{
                    res.status(201).json("pass word is incorrect")
                }
            }else{
                res.status(201).json("no user found")
            }
        }        
    } catch (error) {
        console.log(error);
    }}


const getAllUsers = async (req,res) =>{

    const Users = await user.find()
    if(Users){
        res.status(200).json(Users)
    }else{
        res.status(400).json("user Not found")
    }
}



module.exports = {userRegister , userLogin , getAllUsers}

