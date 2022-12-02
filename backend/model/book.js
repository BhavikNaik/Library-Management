const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Book Schema 
const bookSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    available:{
        type: Boolean,
        require:true
    }
});

module.exports = mongoose.model("Book",bookSchema);