import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);
