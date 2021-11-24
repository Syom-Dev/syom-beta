import React, { FC } from "react";
// eslint-disable-next-line import/named
import { Theme } from "@material-ui/core/styles";
import { Link, withStyles, WithStyles } from "@material-ui/core";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles = (theme: Theme): any => ({
    skipContent: {
        color: theme.palette.secondary.main,
        textDecoration: "underline",
        fontWeight: "bold",
        position: "absolute",
        textAlign: "center",
        clip: "rect(0,0,0,0)",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        border: 0,

        "&:focus": {
            clip: "auto",
            height: "auto",
            width: "auto",
            "z-index": 9999,
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: "1rem",
        }
    }
});


const ScrollToMain: FC<WithStyles<typeof styles>> = ({ classes }) => (
    <Link href="#top" className={classes.skipContent} accessKey="s">
        Hopp til hovedinnhold
    </Link>
);

export default withStyles(theme => styles(theme))(ScrollToMain);