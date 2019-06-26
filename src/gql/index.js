import ApolloClient from 'apollo-boost';

const uri = process.env.REACT_APP_ENV === 'production' ? 'https://7qugq4cfl2.execute-api.ap-southeast-1.amazonaws.com/prod/graphql' : 'https://41i29nwo92.execute-api.ap-southeast-1.amazonaws.com/dev/graphql';

const client = new ApolloClient({
 uri
});
export {
  client,
};
