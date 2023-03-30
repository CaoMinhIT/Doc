const { findById, findByIdAndDelete } = require("../models/userModel");
const User = require("../models/userModel");

const userControllers ={
    getAllUsers: async(req,res)=>{
        try{
            const user = await User.find();
            res.status(200).json(user);
        }catch(error){
            res.status(500).json(err);
        }
    },
    deleteUser: async(req,res)=>{
        try{
            const user = await User.findByIdAndDelete(req.params.id);         
            res.status(200).json("Delete Successed");
        }catch(error){
            res.status(500).json(err);
        }
    }
}
module.exports = userControllers;