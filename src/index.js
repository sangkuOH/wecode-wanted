import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import Theme from "./Styles/Theme";
import GlobalStyle from "./Styles/GlobalStyle";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
    <GlobalStyle />
    <Routes />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
