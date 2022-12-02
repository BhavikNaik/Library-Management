const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const issueSchema = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
        },
    book:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Book" ,
        required: true
    },
    returned: {
        type: Boolean,
        default: false
    }, 
    issueDate:{
        type: Date
    },
    dueDate:{
        type: Date
    },
    returnDate:{
        type: Date
    }
})

module.exports = mongoose.model("Issue",issueSchema);