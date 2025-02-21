import { ApolloClient, InMemoryCache } from '@apollo/client';
import env from './env';

const client = new ApolloClient({
  uri: `${env.strapiURL}/graphql`,  
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${env.strapiJwtToken}`, // Replace with actual token
  }
});

export default client;