const User = require("../models/User");
const bcrypt = require("bcrypt");

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
                    res.status(200).json(email);
                }

        } catch (error) {
            res.status(500).json(err);
        }
    },

}
module.exports = {authControllers};