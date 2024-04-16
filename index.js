let myLibrary = [
	{
		id: 1,
		title: 'Discovering Computers',
		author: 'Shelly Cashman',
		pages: 456,
		read: 'read'
	},
	{
		id: 2,
		title: 'Principles of Web Design',
		author: 'Joel Sklar',
		pages: 675,
		read: 'read'
	}
];

function Book(id, title, author, pages, read) {
    this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

const bookList = document.getElementById('book-list');

function addBookToLibrary() {
    bookList.innerHTML = '';
    
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add("card");

        card.innerHTML = `
            <p><strong>${book.id}. ${book.title}</strong></p>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <button onclick='changeStatus(${book.id})'>${book.read}</button><button onclick='getDelete(${book.id})'>Delete</button>
        `;
        bookList.appendChild(card);       
    })
}

function getFormData() {	
	const title = document.getElementById("title").value;
	if (checkInputText(title, "Please enter the book title")) return;
    const author = document.getElementById("author").value;
    if (checkInputText(author, "Please enter the book author")) return;
    const pages = document.getElementById("pages").value;
    if (checkInputText(pages, "Please enter the pages number")) return;

    if (read.checked) {
		read = 'read';
	} else {
		read = 'not read';
	}
	
    const id = myLibrary.length + 1;
	const recordBook = new Book(id, title, author, pages, read);
    myLibrary.push(recordBook);
	addBookToLibrary();
}

function checkInputText(value, msg) {
	if (value == null || value == "") {
		alert(msg);
        return true;
    }
    return false;
}
	
function changeStatus(id) {
    myLibrary.forEach(book => {
        if (book.id === id) {
            if (book.read === 'read') {
                book.read = 'not read';
            } else {
                book.read = 'read';
            }
        }
		addBookToLibrary();
    })
};
	
function getDelete(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
	addBookToLibrary();
};

const addBook = document.getElementById('add-book');

addBook.addEventListener("click", function() {
    getFormData();
    document.forms[0].reset();
	document.getElementById("title").focus();
});