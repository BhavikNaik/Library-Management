const express = require("express");
const router = express.Router();
const {getAllBooks,addBook,getbook,updateBook,removeBook} = require('../controllers/book_cont')

//  routes to GET api to get all books in database. link: http://localhost:{PORT}/book/
router.get('/',getAllBooks); 

//  routes to POST api to add book to database. link: http://localhost:{PORT}/book/addBook
router.post('/addBook',addBook); 

// routes to GET api to search book by it's name , author or category. link: http://localhost:{PORT}/book/:id
router.get('/:id',getbook); 

// routes to PUT api to update book detail in database. link: http://localhost:{PORT}/book/:id
router.put('/:id',updateBook);

// routes to DELETE api to delete a book from database. link: http://localhost:{PORT}/book/:id
router.delete('/:id',removeBook);

module.exports = router;