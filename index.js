const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

//importing the data from data.js
const b = require('./data');
const books = b.books;

//Get request for all books
app.get('/books/all',(req,res)=>{
    res.json(books);
})




//Listen request for server
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})