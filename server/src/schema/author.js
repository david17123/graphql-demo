const { getBooks } = require('../model/author');

const typeDef = `
  type Author {
    id: ID
    name: String
    books: [Book]
  }

  input AuthorInput {
    name: String!
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
