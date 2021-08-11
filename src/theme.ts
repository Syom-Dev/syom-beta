import { createMuiTheme } from "@material-ui/core";

const grey = "#808483";
// const dark_grey = "#4D4D4D";
const lightGrey = "#CCCCCC";
// const lighter_gray = "#EBEBEB";
const beige = "#C1BEA3";

const green = "#3ACC9F";
const blue = "#48AFEC";

export default createMuiTheme({
  palette: {
    primary: { main: grey },
    secondary: { main: green },
    info: { main: blue },
    text: {
      primary: grey,
      secondary: green,
      disabled: lightGrey,
      hint: beige
    },
    background: { default: "#fff" }
  },
  typography: {
    fontSize: 14,
    fontFamily: ["Helvetica Neue", "\"Raleway\"", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "sans-serif"].join(","),
    h1: {
      fontWeight: 200
    },
    h2: {
      fontWeight: 200
    },
    h3: {
      fontWeight: 200,
      fontSize: "2.67rem"
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    }
  },

  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: 11
      }
    }
  }
  // contentHeight: "calc(100vh - 0px)" // Subtract a nav potentially
});

// declare module "@material-ui/core/styles/createMuiTheme" {
//   interface Theme {
//     contentHeight: string;
//   }
//   // allow configuration using `createMuiTheme`
//   interface ThemeOptions {
//     contentHeight?: string;
//   }
// }

