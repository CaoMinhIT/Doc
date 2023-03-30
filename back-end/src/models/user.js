const mongoose = require('mongoose');

// Schema Định dạng hình thù Data
const userSchema = new mongoose.Schema({ 

    email:{
        type: String,
        require: true,
        minlength: 6,
        unique: true,
    },
    name:{
        type: String,
        require: true,
        maxlength: 20,

    },
    password:{
        type: String,
        require: true,
        minlength: 6,
    },
    type:{
        type: Boolean,
        default:false ,
    },
    status:{
        type: String,
        default: "",
    },
    token:{
        type: String,
        default: "", 
    },


},{timestamps:true});

module.exports = mongoose.model("User",userSchema);
