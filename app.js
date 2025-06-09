// Query Selectors
const bookCardContainer = document.querySelector('.book-card-container');
// Library Array for storing books
const myLibrary = [];
// Programmatically create elements
const newDiv = document.createElement("div");


function Book(title, author, pages, read) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call this contructor");
        
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', ' + read;
    };
}

function addBookToLibrary(title, author, pages, read){
    newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

bookTest = new Book("asdfasfd", "asdfqewr", "195", "read");

myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);
myLibrary.push(bookTest);

function displayBooks(){
    myLibrary.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("book-card");
        bookCardContainer.appendChild(div);
        div.textContent = item.info()
    })
}

displayBooks();