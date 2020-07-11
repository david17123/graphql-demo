const { getAuthorById } = require('../model/author');

const typeDef = `
  type Book {
    id: ID
    title: String
    author: Author
  }

  input BookInput {
    title: String!
    authorId: ID!
  }
`;

const resolver = {
  Book: {
    author: (book) => {
      return getAuthorById(book.authorId);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};