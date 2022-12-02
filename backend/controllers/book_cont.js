const Book = require("../model/book.js")

// Api to get details of book in the database
const getAllBooks = async(req, res, next) => {
    let books
    console.log("get allbooks");
    try {
        books = await Book.find();

    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ message: "No books found" })
    }
    return res.status(200).json({ books })
}

// Api to search book by name, author and category
const getbook = async(req, res, next) => {
    const id = req.params.id;
    let books
    try {
        books = await Book.find({
            "$or": [
                { name: { $regex: id, $options: "i" } },
                { author: { $regex: id, $options: "i" } },
                { category: { $regex: id, $options: "i" } }

            ]
        });

    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ message: "No book found" })
    }
    return res.status(200).json({ books })
}

// API to add Book to the database
const addBook = async(req, res, next) => {
    const { image, name, author, description, category, quantity } = req.body;
    let book;
    let price = 0;
    let available = false;
    if (quantity > 0) {
        available = true
    }
    try {
        book = new Book({
            image,
            name,
            author,
            description,
            price,
            category,
            quantity,
            available
        });
        await book.save();
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Unable to add" })
    }

    if (!book) {
        return res.status(500).json({ message: "Unable to add" })
    }
    return res.status(200).json({ book })
}

// API to update Book in the database
const updateBook = async(req, res, next) => {
    const { name, author, description, price, category, quantity } = req.body;
    let books
    const id = req.params.id;
    let available = false;
    if (quantity > 0) {
        available = true
    }
    try {
        books = await Book.findByIdAndUpdate(id, {
            image,
            name,
            author,
            description,
            price,
            category,
            quantity,
            available
        });
        books = await books.save()

    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ message: "Unable to update" })
    }
    return res.status(200).json({ books })
}


// API to remove Book from the database
const removeBook = async(req, res, next) => {
    let books
    const id = req.params.id;
    try {
        books = await Book.findByIdAndRemove(id);

    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ response: false, message: "Unable to delete" })
    }
    return res.status(200).json({ response: true, message: "Book deleted" })
}
module.exports = {
    getAllBooks,
    addBook,
    getbook,
    updateBook,
    removeBook
}