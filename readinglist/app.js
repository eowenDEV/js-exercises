// Book Constructor creates book object
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// UI Constructor adds book to list, deletes book, shows alert
function UI() {}

// Add Book to List
UI.prototype.addBooktoList = function(book) {
  const list = document.getElementById('book-list');

  // Create tr element with td of book info
  const listrow = document.createElement('tr');
  listrow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#" class="deleterow">X</a></td>
    `;
  list.appendChild(listrow);
  //console.log(listrow);
};

// Show Alert
UI.prototype.showAlert = function(message, alertType) {
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
};

// Delete Book
UI.prototype.deleteBook = function(targetrow) {
  if (targetrow.className === 'deleterow') {
    // Remove target row
    targetrow.parentElement.parentElement.remove();

    // Instantiate UI
    const ui = new UI();

    // Show success alert
    ui.showAlert('Book removed from list', 'success');
  }
};

// Clear Book Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};

// Event Listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value;
  console.log(`Book added: "${title}" by ${author}`);

  // Instantiate book
  const book = new Book(title, author);

  // Instantiate UI
  const ui = new UI();

  // Validate Book Fields
  if (title === '' || author === '') {
    // Show error message
    ui.showAlert('Please enter both Title and Author', 'error');
  } else {
    // Add book to list
    ui.addBooktoList(book);

    // Show success alert
    ui.showAlert('Book added to list', 'success');

    // Clear book fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for deleterow
document.getElementById('book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);

  e.preventDefault();
});
