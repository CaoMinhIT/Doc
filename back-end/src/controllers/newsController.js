const { default: mongoose } = require("mongoose");
const News = require("../models/newsModel");
const userCollection = mongoose.model("User");

const newControllers ={

    getAllNews: async(req,res)=>{

        const Deltoken  = req.headers.token;
        try{
        const findToken = await userCollection.findOne ({token: Deltoken})
            if(findToken){
                const news = await News.find();
                res.status(200).json(news);
            }else{
                res.status(500).json("Không tìm thấy người dùng")
            }
        }catch(error){
            console.error(error);
            res.status(500).json("Lỗi server");
        }



    }
}


module.exports = newControllers;