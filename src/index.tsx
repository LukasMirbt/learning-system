import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import {
  StylesProvider as MUIStylesProvider,
  ThemeProvider as MUIThemeProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import theme from "./App/theme";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <MUIStylesProvider injectFirst>
      <SCThemeProvider theme={theme}>
        <MUIThemeProvider theme={theme}>
          <BrowserRouter>
            <RecoilRoot>
              <App />
            </RecoilRoot>
          </BrowserRouter>
        </MUIThemeProvider>
      </SCThemeProvider>
    </MUIStylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
