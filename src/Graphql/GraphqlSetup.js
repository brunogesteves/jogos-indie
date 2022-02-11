import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
    ApolloClientOptions,
  } from "@apollo/client";
  import { createUploadLink } from "apollo-upload-client";
  
  const BASE_URL  = 'http://localhost:3001/graphql'
  
  
  const link = createUploadLink({
    uri: BASE_URL,
  })
  
  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
  
  
  
  