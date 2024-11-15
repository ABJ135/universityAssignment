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

//get request for Available books
app.get('/books/available',(req,res)=>{
    const available = books.filter(book => book.is_available);
    res.json(available);
})

//get request for not available
app.get('/books/not_available',(req,res)=>{
    const not_available = books.filter(book => book.is_available === false);
    res.json(not_available);
})

//get search by author name
app.get('/books/search',(req,res)=>{
    const search = req.query.author;

    const find = books.find(book => book.author.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    res.json(find);
})

//Listen request for server
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})