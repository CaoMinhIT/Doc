const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require('dotenv').config();

const authControllers = {
    //Register
    registerUser: async(req,res)=>{
        try{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password,salt);

            // create new user
            const newUser = await new User({
                // username: req.body.username,
                email:req.body.email,
                password: hashed,
                type: req.body.type,
                name: req.body.name,
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
            if(!email){
                res.status(404).json("Wrong email!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                email.password
            );
            if(!validPassword){
                res.status(404).json("Wrong password");
            }
                if(email && validPassword){
                    const accessToken = jwt.sign(
                    {
                        id: email.id,
                        type: email.type,
                    },
                    process.env.JWT_ACCESS_KEY,
                    {expiresIn:"3h"},
                    );
                    res.status(200).json({email, accessToken});
                }

        } catch (error) {
            res.status(500).json(err);
        }
    },

}
module.exports = authControllers;