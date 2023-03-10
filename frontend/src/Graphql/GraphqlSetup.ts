import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  // uri: "http://localhost:4000/graphql",
  uri: "https://ji-server.onrender.com/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
