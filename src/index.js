import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import Theme from "./Styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
