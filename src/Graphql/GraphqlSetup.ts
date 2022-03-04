import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { base_url } from "../config";

const BASE_URL = `${base_url}/graphql`;

const link = createUploadLink({
  uri: BASE_URL,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
