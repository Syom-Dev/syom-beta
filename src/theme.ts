import { createMuiTheme } from "@material-ui/core";

const textColor = "rgba(0, 0, 0, 0.9)";

export default createMuiTheme({
    palette: {
        primary: { main: "#91FA8D" },
        text: {
            primary: textColor,
            secondary: textColor,
            disabled: textColor,
            hint: textColor
        }
    },
    typography: {
        fontSize: 12,
        fontFamily: ['"Raleway"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"].join(',')
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