// ES5 standard of importing the package
const { ApolloServer, gql } = require("apollo-server");

const rootQuery = gql`
    type Query {
        // user defined queries here
    }
`;

const resolvers = {
  Query: {
    // Query resolvers
  }
};

const server = new ApolloServer({
  rootQuery,
  resolvers
});

server.listen().then({ url });
