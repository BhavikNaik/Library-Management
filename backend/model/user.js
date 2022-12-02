const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating User Schema 
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User",userSchema);