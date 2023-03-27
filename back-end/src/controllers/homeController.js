const { request } = require('express');
const connection = require('../config/database');
const { getAllUsers, getUserByID, 
  updateUserById, deleteUserById} = require('../services/CRUDService')


const getHomePage = async(req,res) => {
    let result = await User.find({});
    return res.render('home', {listUsers: result});
}

const login = async (req, res) =>{
    // return res.render('login.ejs');
    try {
        const users = await connection();
        res.render('login', { users });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
};


// Create-User
const User = require('../models/user');
const postCreateUser = async (req, res) =>{
    let email = req.body.email;
    let name = req.body.name;
    let password = req.body.password;

    // console.log(">>> email =", email, ">> name =", name, "password =", password);

    await User.create({
      email: email,
      name: name,
      password: password,
    })
    res.send ("Create User Successed !");
}

const getCreatePage = (req,res) =>{
  res.render('create');
}

module.exports ={
    getHomePage,
    login,
    getCreatePage,
    postCreateUser
}