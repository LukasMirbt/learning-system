import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#218821";
const secondary = "#008fcc";
const background = "#f9f9f9";
const borderRadius = "4px";

const transcriptWidth = 300;
const transcriptMarginLeftREM = 0.5;

const titleRowREM = 4;

const MUITheme = createMuiTheme({
  /*   transitions: {
    create: () => "none",
  }, */
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#008fcc",
    },
  },
  props: {
    MuiUseMediaQuery: {
      noSsr: true,
    },
    MuiButtonBase: {
      disableTouchRipple: true,
    },
    MuiInputLabel: {
      classes: {
        root: "InputLabel",
      },
    },
    MuiFormLabel: {
      classes: {},
    },
    MuiInput: {},
    MuiInputBase: {
      classes: {
        input: "Input",
      },
    },
  },
});

const theme = {
  ...MUITheme,
  borderRadius,
  primary,
  secondary,
  background,
  transcriptWidth,
  transcriptMarginLeftREM,
  titleRowREM,
} as const;

export type ThemeType = typeof theme;

export default theme;
