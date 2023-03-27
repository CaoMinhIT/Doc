const mongoose = require('mongoose');

// Schema Định dạng hình thù Data

const userSchema = new mongoose.Schema({ 
    email: String,
    name: String,
    password: String, 
});
const User = mongoose.model('user', userSchema);

module.exports = User;
