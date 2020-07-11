const { getBooks } = require('../model/book');

const typeDef = `
  type Query {
    books(authorId: ID): [Book]
  }
`;

const resolver = {
  Query: {
    books: (parent, args) => {
      return getBooks(args.authorId ? args.authorId.toString() : undefined);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
