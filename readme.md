step 1 

you have to install the node js for for this project

clone this repository and open the project directory in terminal

Run the command npm install this will install the necessary packages

run the server by node.js or by nodemon

API Endpoints
All endpoints return JSON data.

1. Get All Books
Endpoint: /api/books
Method: GET
Description: Returns a list of all books in the library.
2. Get Available Books
Endpoint: /api/books/available
Method: GET
Description: Returns a list of books that are currently available for checkout.
3. Get Issued Books
Endpoint: /api/books/issued
Method: GET
Description: Returns a list of books that have already been issued.
4. Find Books by Author
Endpoint: /api/books?author=AuthorName
Method: GET
Description: Returns a list of books by a specific author. Replace AuthorName with the author’s name.
Project Files
index.js: Main server file with all the routes.
data.js: Contains a list of books as static data.
package.json: Project configuration and dependencies.
README.md: Instructions on how to set up and use the project.


Testing the Api 
You can test the Api by postman. For that you have your postman installed first and the server running