const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

//importing the data from data.js
const b = require('./data');
const books = b.books;

