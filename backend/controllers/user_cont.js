const User = require("../model/user")
const jwt = require('jsonwebtoken')
require('dotenv').config()


var privateKey = process.env.PVTKEY;
// Api to get  details of users in the database
const getAllUsers = async(req, res, next) => {
    let user
    try {
        user = await User.find();

    } catch (error) {
        console.log(error);
    }
    if (!user) {
        return res.status(404).json({ message: "No Users found" })
    }
    return res.status(200).json({ user })
}

// API to register a user in database
const register = async(req, res, next) => {
    const { name, email, phone, password } = req.body;
    let user
    console.log(name, email, phone, password);
    try {
        user = await User.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        })
        if (user) {
            return res.status(500).json({ message: "User already registered" })
        }
        user = new User({
            name,
            email,
            phone,
            password
        });
        await user.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Unable to add" })
    }
    if (!user) {
        return res.status(500).json({ message: "Unable to add" })
    }
    if (user) {
        const token = jwt.sign({ user }, privateKey)
        console.log(token);
        return res.status(200).json({ tokenid: token })
    }

}


// API for user to sign up
const login = async(req, res, next) => {
    // const {email,password} = req.body;
    let user
    console.log(res.body);
    try {
        user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Login failed" })
    }
    if (!user) {
        return res.status(500).json({ message: "Login failed" })
    }
    const token = jwt.sign({ user }, privateKey)
    return res.status(200).json({ status: "ok", tokenid: token })
}

// API to search the user by it's name,phone number and email 
const getUser = async(req, res, next) => {
    const id = req.params.id;
    let user
    try {
        user = await User.find({
            "$or": [
                { name: { $regex: id, $options: "i" } },
                { email: { $regex: id, $options: "i" } },
                { phone: { $regex: id, $options: "i" } }
            ]
        });
    } catch (error) {
        console.log(error);
    }
    if (!user) {
        return res.status(404).json({ message: "No book found" })
    }
    return res.status(200).json({ user })
}

// API to update a user details in the database
const updateUser = async(req, res, next) => {
    const { name, email, phone, password } = req.body;
    let user
    const id = req.params.id;

    try {
        user = await User.findByIdAndUpdate(id, {
            name,
            email,
            phone,
            password
        });
        user = await user.save()

    } catch (error) {
        console.log(error);
    }
    if (!user) {
        return res.status(404).json({ response: false, message: "Unable to update" })
    }
    return res.status(200).json({ response: true, message: "User updated" })
}


// API to remove a User from the database
const removeUser = async(req, res, next) => {
    let user
    const id = req.params.id;
    try {
        user = await User.findByIdAndRemove(id);

    } catch (error) {
        console.log(error);
    }
    if (!user) {
        return res.status(404).json({ message: "Unable to delete" })
    }
    return res.status(200).json({ message: "User deleted" })
}


module.exports = { register, login, getAllUsers, getUser, updateUser, removeUser }