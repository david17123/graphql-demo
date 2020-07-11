const { data: booksData } = require('../data/books');

const getBooks = (authorId) => {
  if (authorId) {
    return booksData.filter(book => book.authorId === authorId);
  }
  return booksData;
};

const getBookById = (id) => {
  return booksData.find(book => book.id === id);
};

module.exports = {
  getBooks,
  getBookById,
};
