const { data: booksData } = require('../data/books');
const { data: authorsData } = require('../data/authors');

const getBooks = (authorId) => {
  if (authorId) {
    return booksData.filter(book => book.authorId === authorId);
  }
  return booksData;
};

const getBookById = (id) => {
  return booksData.find(book => book.id === id);
};

const addBook = (title, authorId) => {
  if (!title) {
    throw new Error('Missing title');
  }
  if (!authorId) {
    throw new Error('Missing author ID');
  }
  const isValidAuthorId = !!authorsData.find(author => author.id === authorId);
  if (!isValidAuthorId) {
    throw new Error('Invalid author ID');
  }
  const bookAlreadyExists = !!booksData.find(book => book.title === title && book.authorId === authorId);
  if (bookAlreadyExists) {
    throw new Error('Book already exists');
  }

  const newId = booksData.reduce((maxId, book) => {
    const bookId = Number(book.id);
    return bookId > maxId ? bookId : maxId;
  }, 0) + 1;
  const newBook = {
    id: newId.toString(),
    title,
    authorId,
  };
  booksData.push(newBook);
  return newBook;
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
};
