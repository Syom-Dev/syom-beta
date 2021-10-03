import { createTheme } from "@material-ui/core/styles";

const grey = "#808483";
const darkGrey = "#4D4D4D";
const lightGrey = "#CCCCCC";
// const lighter_gray = "#EBEBEB";
const beige = "#C1BEA3";

const green = "#3ACC9F";
const blue = "#48AFEC";

export default createTheme({
  palette: {
    primary: { main: grey },
    secondary: { main: green },
    info: { main: blue },
    text: {
      primary: darkGrey,
      secondary: green,
      disabled: lightGrey,
      hint: beige
    },
    background: { default: "#fff" }
  },
  typography: {
    fontSize: 19,
    fontFamily: ["Helvetica Neue", "\"Roboto\"", "\"Inter\"", "\"Raleway\"", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "sans-serif"].join(","),
    h1: {
      fontWeight: 200,
      fontSize: "42px"
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
      fontWeight: 300,
      fontSize: "1.69rem"
    },
    h6: {
      fontWeight: 500
    },
    body1: {
      fontSize: 19,
      lineHeight: 2.5
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

