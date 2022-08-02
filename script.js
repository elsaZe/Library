let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

document.getElementById('add').addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    createDiv(myLibrary);
    hidePopup();
}

const parent = document.getElementById('book_list')

function createDiv(library) {

    clearCards(parent);

    for(let i=0; i<library.length; i++){
        const bookDiv = document.createElement('div')
        document.getElementById('book_list').appendChild(bookDiv)
        bookDiv.className = "book_box";

        const titleDiv = document.createElement('div')
        titleDiv.classList.add('titleDiv');
        titleDiv.textContent = library[i].title
        titleDiv.className = "book_title";
        bookDiv.appendChild(titleDiv)

        const authorDiv = document.createElement('div')
        authorDiv.classList.add('authorDiv');
        authorDiv.textContent = "Author: "+library[i].author
        authorDiv.className = "author_name";
        bookDiv.appendChild(authorDiv)
    
        const pagesDiv = document.createElement('div')
        pagesDiv.classList.add('titleDiv');
        pagesDiv.textContent = "Pages: "+library[i].pages
        pagesDiv.className = "pages_number";
        bookDiv.appendChild(pagesDiv)
    
        const checkboxDiv = document.createElement('div');
        bookDiv.appendChild(checkboxDiv);
        checkboxDiv.className = "read_checkbox"

        const checkboxLabel = document.createElement('p')
        checkboxLabel.textContent = "read?"
        checkboxDiv.appendChild(checkboxLabel)

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkbox');
        if(library[i].read == true){
            checkbox.checked = true
        }else{
            checkbox.checked = false
        }
        checkbox.className = "checkbox";
        checkboxDiv.appendChild(checkbox);
    
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.id=i
        bookDiv.appendChild(deleteButton);


        deleteButton.addEventListener('click', removeBook => {
            let button = document.getElementById(i);
            for(let j = 0; j<library.length; j++){
                if(button.id == j){
                    library.splice(j, 1)
                }
                createDiv(library)
            }
        })

    }
 
}

function clearCards(parent) {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}



document.getElementById('new').addEventListener('click', showPopup)

function showPopup() {
    document.querySelector('.inputs').style.display = "grid"
}

function hidePopup() {
    document.querySelector('.inputs').style.display = "none"
}

