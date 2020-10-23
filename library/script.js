let myLibrary = []

function Book(bookTitle, author, pages, read) {
  this.bookTitle = bookTitle
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    if(read){
      state = "read"
    } else {
      state = "not read yet"
    }
    text = bookTitle + " by " + author + ", " + pages + " pages, " + state
    return text
  }
}

function AddBook() {

}
