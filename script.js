let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function createDiv(newBook) {
    let index=myLibrary.length;
    const bookDiv = document.createElement('div')
    document.getElementById('book_list').appendChild(bookDiv)
    bookDiv.className = index;
    
    const titleDiv = document.createElement('div')
    titleDiv.classList.add('titleDiv');
    titleDiv.textContent = newBook.title
    titleDiv.className = "book_title";
    bookDiv.appendChild(titleDiv)
    
    const authorDiv = document.createElement('div')
    authorDiv.classList.add('authorDiv');
    authorDiv.textContent = newBook.author
    authorDiv.className = "author_name";
    bookDiv.appendChild(authorDiv)

    const pagesDiv = document.createElement('div')
    pagesDiv.classList.add('titleDiv');
    pagesDiv.textContent = newBook.pages
    pagesDiv.className = "book_title";
    bookDiv.appendChild(pagesDiv)

    const readDiv = document.createElement('div')
    readDiv.classList.add('titleDiv');
    readDiv.textContent = newBook.read
    readDiv.className = "book_title";
    bookDiv.appendChild(readDiv)
}


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook)
    console.log(myLibrary)
    createDiv(newBook)
}

document.getElementById('add').addEventListener('click', addBookToLibrary)