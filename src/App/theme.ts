import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#218821";

const MUITheme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#008fcc",
    },
  },
});

const secondary = "#008fcc";
const background = "#f9f9f9";
const borderRadius = "4px";

const theme = {
  ...MUITheme,
  borderRadius,
  primary,
  secondary,
  background,
} as const;

export type ThemeType = typeof theme;

export default theme;
