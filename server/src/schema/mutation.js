const { addBook } = require('../model/book');
const { addAuthor } = require('../model/author');

const typeDef = `
  type Mutation {
    addBook(book: BookInput!): Book
    addAuthor(author: AuthorInput!): Author
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
    addAuthor: (parent, args) => {
      return addAuthor(args.author.name);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
