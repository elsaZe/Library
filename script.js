let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function createDiv(newBook) {
    let index=myLibrary.length-1;
    const bookDiv = document.createElement('div')
    document.getElementById('book_list').appendChild(bookDiv)
    bookDiv.className = "book_box";
    bookDiv.id = "book"+index;
    
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

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox');
    if(newBook.read.checked == true){
        checkbox.checked = true
    }else{
        checkbox.checked = false
    }

    checkbox.className = "checkbox";
    bookDiv.appendChild(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.id = index;
    bookDiv.appendChild(deleteButton);

    document.getElementById(index).addEventListener('click', deleteBook);

    function deleteBook() {
        console.log("delete")
    }
}


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read');
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook)
    console.log(myLibrary)
    console.log(newBook.read.checked)
    createDiv(newBook)
}



document.getElementById('add').addEventListener('click', addBookToLibrary);

