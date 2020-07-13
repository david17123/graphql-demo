const { getAuthorById } = require('../model/author');
const { getPublisherById } = require('../model/publisher');

const typeDef = `
  type Book {
    id: ID!
    title: String!
    isbn13: String
    isbn: String
    publishMonth: Month
    publishYear: Int
    author: Author
    publisher: Publisher
  }

  enum Month {
    JANUARY
    FEBRUARY
    MARCH
    APRIL
    MAY
    JUNE
    JULY
    AUGUST
    SEPTEMBER
    OCTOBER
    NOVEMBER
    DECEMBER
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
    publisher: (book) => {
      return getPublisherById(book.publisherId);
    },
  },
};

module.exports = {
  typeDef,
  resolver,
};
