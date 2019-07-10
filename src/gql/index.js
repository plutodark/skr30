import ApolloClient from 'apollo-boost';
console.log('REACT_APP_ENV', process.env.REACT_APP_ENV);
const uri = process.env.REACT_APP_ENV === 'production' ? 'https://7qugq4cfl2.execute-api.ap-southeast-1.amazonaws.com/prod/graphql' : 'https://41i29nwo92.execute-api.ap-southeast-1.amazonaws.com/dev/graphql';
console.log('uri', uri);
const client = new ApolloClient({
 uri
});
export {
  client,
};
