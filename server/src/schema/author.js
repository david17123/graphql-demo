const { getBooks } = require('../model/author');

const typeDef = `
  type Author {
    id: ID
    name: String
    books: [Book]
  }
`;

const resolver = {
  Author: {
    books: (author) => {
      return getBooks(author.id);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
