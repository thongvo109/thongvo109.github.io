import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./Components/Theme/GlobalStyles";
import { darkTheme } from "./Components/Theme/Theme";
import Toggle from "./Components/Theme/Toggler";
import { useDarkMode } from "./Components/Theme/useDarkMode";
import { config } from "./config";
import GithubCallback from "./Containers/GithubCallback";
import Router from "./Router";
import { client } from "./Utils/apollo";

const Application = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? darkTheme : darkTheme;

  if (urlParams.get("code")) {
    return <GithubCallback />;
  }

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={config.subtitle} />
        <meta name="theme-color" content={config.header.backgroundColor} />
      </Helmet>
      <ApolloProvider client={client}>
        <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />
          <Router />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default Application;
