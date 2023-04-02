const mongoose = require('mongoose');

// Schema Định dạng hình thù Data
const userSchema = new mongoose.Schema({ 

    email:{
        type: String,
        require: true,
        minlength: 6,
        unique: true,
    },
    username:{
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
        type: String,
        require: true,
        default: "user", 
    },

    statusType:{
        type: Boolean,
        default: true, 
    },
    token:{
        type: String,
        default: "", 
        require: true,
    },


},{timestamps:true});

module.exports = mongoose.model("User",userSchema);
