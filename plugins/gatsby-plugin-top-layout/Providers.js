import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../src/theme";
import { RecoilRoot } from "recoil";
import { ThemeProvider as SCThemeProvider } from "styled-components";

const Providers = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Video lectures and course material for insert course title"
        />

        <title>Insert course title</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <RecoilRoot>{props.children}</RecoilRoot>
        </SCThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Providers;
