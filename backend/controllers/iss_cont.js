const Issue = require("../model/issue")
const Book = require("../model/book.js")
const User = require("../model/user")

// Api to get details of issues in the database
const getAllIss = async(req, res, next) => {
    let issue
    try {
        issue = await Issue.find().populate('user').populate('book')

    } catch (error) {
        console.log(error);
    }
    if (!issue) {
        return res.status(404).json({ message: "No issue found" })
    }
    return res.status(200).json({ issue })
}


//  API to issue a book
const issueBook = async(req, res, next) => {
    const { userId, bookId } = req.body;
    let issue;

    const todayDate = new Date();
    const dueDate = new Date(new Date().setDate(new Date().getDate() + 7))
    let book = await Book.findById(bookId)
    try {
        if (!book.available) {
            return res.status(500).json({ message: "Unable to issue" })
        }
        issue = new Issue({
            user: userId,
            book: bookId,
            issueDate: todayDate,
            dueDate: dueDate
        })
        await issue.save();
    } catch (error) {
        console.log(error);
    }
    if (!issue) {
        return res.status(500).json({ message: "Unable to issue" })
    }

    book.available = false;
    if (book.quantity - 1 > 0) {
        book.available = true
    }
    try {

        book = await book.updateOne({
            image: book.image,
            name: book.name,
            author: book.author,
            description: book.description,
            price: book.price,

            category: book.category,
            quantity: book.quantity - 1,
            available: book.available
        })


    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "Unable to update Book" })
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update Book" })
    }
    return res.status(200).json({ issue })
}

//  API to return a book
const retBook = async(req, res, next) => {
    const id = req.params.id;
    let issue;
    let todayDate = new Date();
    issue = await Issue.findById(id)
    console.log(todayDate);
    let check
    try {

        if (!issue) {
            return res.status(404).json({ message: "Unable to update" })
        }
        if (issue.returned == true) {
            return res.status(200).json({ message: "book already returned" })
        }
        check = await issue.updateOne({
            user: issue.user,
            book: issue.book,
            issueDate: issue.issueDate,
            returned: true,
            dueDate: issue.dueDate,
            returnDate: todayDate
        })
    } catch (error) {
        console.log(error);
    }
    let books

    try {
        books = await Book.findById(issue.book)
        books.available = false;
        if (books.quantity + 1 > 0) {
            books.available = true
        }
        books = await books.update({
            image: books.image,
            name: books.name,
            author: books.author,
            description: books.description,
            price: books.price,
            category: books.category,
            quantity: books.quantity + 1,
            available: books.available
        })


    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ message: "Unable to update Book" })
    }
    return res.status(200).json({ check })
}


// Api to search issue by name, book 
const getIss = async(req, res, next) => {
    const id = req.params.id;
    let issue
    try {

        issue = await Issue.find({
            "$or": [
                { user: id },
                { book: id },
            ]
        }).populate('user').populate('book')

    } catch (error) {
        console.log(error);
    }
    if (!issue) {
        return res.status(404).json({ message: "No issue found" })
    }
    return res.status(200).json({ issue })
}


module.exports = { issueBook, retBook, getAllIss, getIss }