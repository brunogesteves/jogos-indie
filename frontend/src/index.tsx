import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import InfoProvider  from "./Contexts/Context";
import { client } from "./Graphql/GraphqlSetup";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <InfoProvider>
        <App />
      </InfoProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
