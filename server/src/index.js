const { ApolloServer, makeExecutableSchema } = require('apollo-server');

const { typeDef: queryTypeDef, resolver: queryResolver } = require('./schema/query');
const { typeDef: mutationTypeDef, resolver: mutationResolver } = require('./schema/mutation');
const { typeDef: bookTypeDef, resolver: bookResolver } = require('./schema/book');
const { typeDef: authorTypeDef, resolver: authorResolver } = require('./schema/author');

const schema = makeExecutableSchema({
  typeDefs: [
    queryTypeDef,
    mutationTypeDef,
    bookTypeDef,
    authorTypeDef,
],
  resolvers: {
    ...queryResolver,
    ...mutationResolver,
    ...bookResolver,
    ...authorResolver,
  },
});
const server = new ApolloServer({ schema, rootValue: 10 });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
