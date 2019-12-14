class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  addBooktoList(book) {
    const list = document.getElementById('book-list');

    // Create tr element with td of book info
    const listrow = document.createElement('tr');
    listrow.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td><a href="#" class="deleterow">X</a></td>
          `;
    list.appendChild(listrow);
  }

  showAlert(message, alertType) {
    // Create message div
    const div = document.createElement('div');
    div.className = `alert ${alertType}`;
    div.appendChild(document.createTextNode(message));

    // Add div to page after container, before form
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Timeout alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(targetrow) {
    if (targetrow.className === 'deleterow') {
      // Remove target row
      targetrow.parentElement.parentElement.remove();

      // Instantiate UI
      const ui = new UI();

      // Show success alert
      ui.showAlert('Book removed from list', 'success');
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UI();

      ui.addBooktoList(book);
    });
  }

  static checkForDuplicateBook(newbook) {
    const books = Store.getBooks();
    let uniqueBook = true;
    // Check books in local storage for duplicate
    for (let i = 0; i < books.length; i++) {
      //console.log(`loop ${i} ${newbook.title} ${newbook.author}`);
      if (newbook.title === books[i].title && newbook.author === books[i].author) {
        console.log(`Duplicate book: "${newbook.title}" by ${newbook.author}`);
        uniqueBook = false;
        break;
      }
    }

    if (uniqueBook) {
      console.log(`Unique book: "${newbook.title}" by ${newbook.author}`);
      return false;
    }
    return true;
  }
  static addBook(newbook) {
    const books = Store.getBooks();

    books.push(newbook);

    localStorage.setItem('books', JSON.stringify(books));
    console.log(`Added book: "${newbook.title}" by ${newbook.author}`);
  }

  static removeBook(title, author) {
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if (book.title === title && book.author === author) {
        books.splice(index, 1);
        console.log(`Removed book: "${title}" by ${author}`);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event Listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value;

  // Instantiate book
  const book = new Book(title, author);

  // Instantiate UI
  const ui = new UI();

  // Validate Book Fields
  if (title === '' || author === '') {
    // Show error message
    ui.showAlert('Please enter both Title and Author', 'error');
  } else {
    // Check if duplicate book
    const duplicateBook = Store.checkForDuplicateBook(book);
    if (!duplicateBook) {
      // Add book to list
      ui.addBooktoList(book);

      // Add book to local storage
      Store.addBook(book);

      // Show success alert
      ui.showAlert('Book added to list', 'success');
    } else {
      // Show success alert
      ui.showAlert('This book is already on the list', 'error');
    }

    // Clear book fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for deleterow
document.getElementById('book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from local storage
  Store.removeBook(
    e.target.parentElement.previousElementSibling.previousElementSibling.textContent,
    e.target.parentElement.previousElementSibling.textContent
  );

  e.preventDefault();
});
