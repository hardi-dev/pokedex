import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useApollo } from "@libs/gql/helper";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "@comps";
import { ThemeProvider } from "@emotion/react";
import theme from "@src/libs/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default MyApp;
