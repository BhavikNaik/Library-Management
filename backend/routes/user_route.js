const express = require("express");
const router = express.Router();
const {register,login,getAllUsers,getUser,updateUser,removeUser} = require('../controllers/user_cont')
const jwt = require('jsonwebtoken')
require('dotenv').config()


var privateKey = process.env.PVTKEY;
const jwtAuth = async (req,res,next)=>{
    var token = req.headers.authorization;
    token =  token.split(' ')[1];
    console.log(token);
    jwt.verify(token,privateKey,(err,decoded)=>{
        if(err){
            res.send({message:"Invalid Token"})
            
        }else{
            next();
        }
    })
}

// routes to GET api to get all users in database. link: http://localhost:{PORT}/user/getUsers
router.get("/getUsers",jwtAuth,getAllUsers)

// routes to POST api to register user in database.  link: http://localhost:{PORT}/user/register
router.post('/register',register)

// routes to POST api to login user. link: http://localhost:{PORT}/user/login
router.post('/login',login);

// routes to GET api to search user by it's name,phone number and email. link: http://localhost:{PORT}/user/:id
router.get('/:id',getUser);

// routes to PUT api to update a user. link: http://localhost:{PORT}/user/:id
router.put('/:id',updateUser);

// routes to DELETE api to delete user. link: http://localhost:{PORT}/user/:id
router.delete('/:id',removeUser);


module.exports = router;