const express = require('express');
const app = express();
const port = process.env.PORT || 8989

// Calling the connect file to connect with the atlas database
const con = require('./connect.js')
const cors = require('cors')


const bookRouter = require('./routes/book_routes')
const userRouter = require('./routes/user_route')
const issueRouter = require('./routes/iss_rout')

app.use(cors())
app.use(express.json())

//Calling the book APIs in the index file
app.use('/book',bookRouter);

//Calling the user APIs in the index file
app.use('/user',userRouter);


app.use('/issue',issueRouter);

//setting up a server at local host
app.listen(port, () => {
    console.log(`app listening at http://localhost:${8989}`)
})