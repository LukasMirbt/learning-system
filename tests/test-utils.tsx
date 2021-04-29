import React, { FunctionComponent, ReactElement } from "react";
import { cleanup, render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { ThemeProvider as SCThemeProvider } from "styled-components";

type InitializeRecoilState = (snapshot: MutableSnapshot) => void;

const AllTheProviders: FunctionComponent<{
  initializeRecoilState?: InitializeRecoilState;
}> = ({ children, initializeRecoilState }) => {
  return (
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <RecoilRoot initializeState={initializeRecoilState}>
          {children}
        </RecoilRoot>
      </SCThemeProvider>
    </ThemeProvider>
  );
};

export const renderWithProviders = (
  ui: ReactElement,
  initializeRecoilState?: InitializeRecoilState,
  options?: Omit<RenderOptions, "queries">
) => {
  cleanup();
  return render(ui, {
    wrapper: (props) => (
      <AllTheProviders
        {...props}
        initializeRecoilState={initializeRecoilState}
      />
    ),
    ...options,
  });
};
