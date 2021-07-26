import { createMuiTheme } from "@material-ui/core";

const grey = "#808483";
//const dark_grey = "#4D4D4D";
const light_grey = "#CCCCCC";
//const lighter_gray = "#EBEBEB";
const beige = "#C1BEA3";

const green = "#3ACC9F";


export default createMuiTheme({
    palette: {
        primary: { main: grey },
        secondary: { main: green },
        text: {
            primary: grey,
            secondary: green,
            disabled: light_grey,
            hint: beige
        },
        background: { default: "#fff" }
    },
    typography: {
        fontSize: 12,
        fontFamily: ["Helvetica Neue", '"Raleway"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "sans-serif"].join(',')
    },

    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: 11
            }
        }
    },
    contentHeight: "calc(100vh - 0px)" // Subtract a nav potentially
});

declare module "@material-ui/core/styles/createMuiTheme" {
    interface Theme {
        contentHeight: string;
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        contentHeight?: string;
    }
}