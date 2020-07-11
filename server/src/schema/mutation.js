const { addBook } = require('../model/book');

const typeDef = `
  type Mutation {
    addBook(book: BookInput!): Book
  }
`;

const resolver = {
  Mutation: {
    addBook: (parent, args) => {
      return addBook(
        args.book.title,
        args.book.authorId ? args.book.authorId.toString() : undefined,
      );
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
