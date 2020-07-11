const { getBooks } = require('../model/book');

const typeDef = `
  type Query {
    books(authorId: Int): [Book]
  }
`;

const resolver = {
  Query: {
    books: (parent, args) => {
      return getBooks(args.authorId);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
