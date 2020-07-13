const { getBooks } = require('../model/book');
const { getAuthors } = require('../model/author');

const typeDef = `
  type Query {
    books(authorId: ID): [Book]
    authors(bookId: ID): [Author]
  }
`;

const resolver = {
  Query: {
    books: (parent, args) => {
      return getBooks(args.authorId ? args.authorId.toString() : undefined);
    },
    authors: (parent, args) => {
      return getAuthors(args.bookId ? args.bookId.toString() : undefined);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
