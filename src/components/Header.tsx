import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

import Scrolldown from "./Scrolldown";

const useStyles = makeStyles((theme: Theme) => createStyles({
    imageContainer: {
        "height": "100%",
        "width": "100%",
        "margin": "auto",
        "position": "relative",

        "&::before": {
            content: "''",
            display: "block",
            background: "url(img/stock/handssewing.png)",
            backgroundSize: "cover",
            opacity: 0.5,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            zIndex: -1
        }
    },
    fader: {
        height: "100%",
        minHeight: theme.contentHeight,
        width: "100%",
        background: "linear-gradient(0, white, transparent)",
        margin: "auto",
        textAlign: "center"
    }
}));

const SyomHeader: FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.imageContainer} >
            <Box className={classes.fader} py={10} >
                <Container>
                    <Box>
                        <img src="/img/elements/logo1.png" alt="SYOM" style={{ height: "150px" }} />
                    </Box>
                    <Box paddingTop={4}>
                        <Typography component="p" variant="h5">
                            Langt liv for klærne
                        </Typography>
                    </Box>
                    <Box>
                        <img src="/img/elements/appview.png" alt="SYOM" style={{ height: "50vh" }} />
                    </Box>
                    <hr style={{ border: "none", borderTop: "solid #E4E4E4", borderWidth: 3 }} />
                    <Typography component="h1" variant="h2">
            Hvorfor SYOM?
                    </Typography>

                    <Typography component="p" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>

                    <Scrolldown />
                </Container>
            </Box>
        </Box>
    );
};

export default SyomHeader;
