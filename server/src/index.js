const { ApolloServer, makeExecutableSchema } = require('apollo-server');

const { typeDef: queryTypeDef, resolver: queryResolver } = require('./schema/query');
const { typeDef: bookTypeDef, resolver: bookResolver } = require('./schema/book');
const { typeDef: authorTypeDef, resolver: authorResolver } = require('./schema/author');

const schema = makeExecutableSchema({
  typeDefs: [
    queryTypeDef,
    bookTypeDef,
    authorTypeDef,
],
  resolvers: {
    ...queryResolver,
    ...bookResolver,
    ...authorResolver,
  },
});
const server = new ApolloServer({ schema, rootValue: 10 });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
