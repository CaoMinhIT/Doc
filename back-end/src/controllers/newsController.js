const { default: mongoose } = require("mongoose");
const newsModel = require("../models/newsModel");
const userCollection = mongoose.model("User");

const newControllers ={

    getAllNews: async(req,res)=>{

        const Deltoken  = req.headers.token;
        try{
        const findToken = await userCollection.findOne ({token: Deltoken})
            if(findToken){
                const news = await newsModel.find();
                res.status(200).json(news);
            }else{
                res.status(500).json("Không tìm thấy người dùng")
            }
        }catch(error){
            console.error(error);
            res.status(500).json("Lỗi server");
        }
    },

    createNews: async(req,res) =>{
        try {
            
            const news = await new newsModel({   
                image: req.body.image,
                content: req.body.content,
                title: req.body.title,
            });
            const saveNews = await news.save();
            res.status(200).json(saveNews)
            
        } catch (error) {
            res.status(400).json(error)
        }
    }
}


module.exports = newControllers;