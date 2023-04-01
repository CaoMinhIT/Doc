const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


require('dotenv').config();

const authControllers = {
    // Access token
    makeAccessToken:(email)=>{
        return jwt.sign(
            {
                id: email.id,
                type: email.type,
            },
            process.env.JWT_ACCESS_KEY);
    },

    //Register
    registerUser: async(req,res)=>{
        try{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password,salt);

            // create new user
            const newUser = await new User({              
                email:req.body.email,
                password: hashed,
                username: req.body.username,
                type: req.body.type,

            })
            const user = await newUser.save();
            res.status(200).json(user);

        }catch(error){
            res.status(500).json(err)
        }
    },

    //Login
    loginUser: async(req,res)=>{
        try {
            const email = await User.findOne({email: req.body.email});
            const user = await User.findOne({email: req.body.email});

            if(!email){
                res.status(404).json("Nhập sai email !");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                email.password
            );
            if(!validPassword){
                res.status(404).json("Nhập sai mật khẩu !");
            }
                if(email && validPassword){
                    const accessToken = authControllers.makeAccessToken(email);
                    //save token to database
                    User.findOneAndUpdate({id:req.params.id}, {token: accessToken}, (err, user) => {
                        if(err){
                            console.err(err);
                        }else{
                            console.log('Token đã được lưu');
                        }
                    });
                    res.status(200).json({user,accessToken});
                }

        } catch (error) {
            res.status(500).json(err);
        }
    },
    //LogOut
    logoutUser: async(req,res) =>{

            User.findOneAndUpdate({id:req.params.id}, {token: ""}, (err, user) => {
                if(err){
                    console.err(err);
                }else{
                    console.log('Token đã bị xóa');
                }
            });
    }
}
module.exports = authControllers;