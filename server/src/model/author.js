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

const addAuthor = (name) => {
  if (!name) {
    throw new Error('Missing name');
  }
  const authorAlreadyExists = !!authorsData.find(author => author.name === name);
  if (authorAlreadyExists) {
    throw new Error('Author already exists');
  }

  const newId = authorsData.reduce((maxId, book) => {
    const authorId = Number(book.id);
    return authorId > maxId ? authorId : maxId;
  }, 0) + 1;
  const newAuthor = {
    id: newId.toString(),
    name,
  };
  booksData.push(newAuthor);
  return newAuthor;
};

module.exports = {
  getAuthors,
  getAuthorById,
  addAuthor,
};
