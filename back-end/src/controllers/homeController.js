const { request } = require('express');

const Login = (req, res) =>{
    return res.render('login.ejs');
};




module.exports ={
    Login,
}