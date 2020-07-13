const typeDef = `
  type Publisher {
    id: ID
    name: String
  }
`;

const resolver = {
  Publisher: {},
};

module.exports = {
  typeDef,
  resolver,
};
