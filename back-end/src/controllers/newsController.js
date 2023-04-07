const { default: mongoose } = require("mongoose");
const newsModel = require("../models/newsModel");
const userCollection = mongoose.model("User");
const userModel = require("../models/newsModel");

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
    },

    deleteNews: async(req,res) =>{
        const Deltoken = req.headers.token
        const delNewsId = req.params.id;      
        try{

            const userC = await userCollection.findOne({token : Deltoken}).exec();
            if (userC && userC.type == 'admin' ){
                const delNews = await newsModel.findByIdAndDelete(delNewsId).exec();   
                if(delNews) {
                    res.status(200).json("Xóa tin tức thành công");                  
                }else{
                    res.status(404).json("Không tìm thấy tin này");
                }
            }else{
                res.status(401).json("Không có quyền truy cập");
            }
        }catch(error){
            res.status(500).json(error);
        }
    }

}

module.exports = newControllers;