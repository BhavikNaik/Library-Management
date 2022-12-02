const express = require("express");
const router = express.Router();
const {issueBook,retBook,getAllIss,  getIss} = require('../controllers/iss_cont')

router.post('/isuueBook',issueBook); 

router.get('/retBook/:id',retBook);

router.get('/getIss',getAllIss);

router.get('/getIss/:id',getIss);

module.exports = router;