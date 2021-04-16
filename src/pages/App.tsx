import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "lib/AuthProvider";
import ProtectedRoute from "lib/ProtectedRoute";
import PublicRoute from "lib/PublicRoute";
import { pageConfigurations } from "pages/configs";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function App() {
  console.log(pageConfigurations);
  return ( 
    <BrowserRouter>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <AuthProvider>
            <Switch>
              <ProtectedRoute>
                {pageConfigurations.protected.map(({ component: Component, path, exact }) => {
                  return (
                    <Route path={path} exact={exact} key={path}>
                      <Component />
                    </Route>
                  );
                })}
              </ProtectedRoute>
            </Switch>
            <Switch>
              <PublicRoute>
                {pageConfigurations.public.map(({ component: Component, path, exact }) => {
                  console.log(path, "Paths");
                  return (
                    <Route path={path} exact={exact} key={path}>
                      <Component />
                    </Route>
                  );
                })}
              </PublicRoute>
            </Switch>
          </AuthProvider>
        </ApolloProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
