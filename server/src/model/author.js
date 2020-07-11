const { data: authorsData } = require('../data/authors');
const { data: booksData } = require('../data/books');

const getAuthors = (bookId) => {
  if (bookId) {
    const authorIdsHash = booksData
      .filter(book => book.id === bookId)
      .map(book => book.authorId)
      .reduce((idsHash, authorId) => {
        idsHash[authorId] = true;
        return idsHash;
      }, []);
    return authorsData.filter(author => authorIdsHash[author.id]);
  }

  return authorsData;
};

const getAuthorById = (id) => {
  return authorsData.find(author => author.id === id);
};

module.exports = {
  getAuthors,
  getAuthorById,
};
