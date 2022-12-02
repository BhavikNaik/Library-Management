const mongoose = require('mongoose')

//Important API key and password are being saved in .env file
require('dotenv').config()

// URl to connect with the atlas server
// Cluster name  and password are being saved in .env file and called here
//uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.mbaqegg.mongodb.net/?retryWrites=true&w=majority`
uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.nivkzh4.mongodb.net/?retryWrites=true&w=majority`

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

//  Connecting to the atlas  server
const con = mongoose.connect(uri, options).then(
    () => {
        console.log("Connection successful");
    },
    err => { console.log(err) }
);

module.exports = con