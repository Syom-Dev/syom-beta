import React, { FC } from "react";
import { Box, Container, Typography } from "@material-ui/core";

import { useStyles } from "./styles.jss";
// import Scrolldown from "../Scrolldown";

const SyomHeader: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer} >
      <Box className={classes.fader} py={10} >
        <Container maxWidth="sm">
          <Box>
            <img src="/img/elements/logo1.svg" alt="Syom" />
          </Box>
          <Box pt={4} pb={3}>
            <Typography component="p" variant="h5">
              Langt liv for klærne
            </Typography>
          </Box>

          <Box>
            <img src="/img/elements/appview.svg" alt="SYOM" style={{ maxHeight: "300px" }} />
          </Box>

          <Box display="flex" justifyContent="center" pb={4}>
            <Box className={classes.blueCircle} display="flex" justifyContent="center" alignItems="center">
              <Typography component="p">BETA</Typography>
            </Box>
          </Box>

          <Box pt={2} pb={4} className={classes.lineBox} />
          <Container>

            <Box pb={4}>
              <Typography component="h1" variant="h2">
                Hvorfor SYOM?
              </Typography>
            </Box>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            <Box pt={4}>
              <img src="/img/elements/logo2.png" alt="SYOM" style={{ height: "40px" }} />
            </Box>
          </Container>
          {/* <Scrolldown /> */}
        </Container>
      </Box>
    </Box >
  );
};

export default SyomHeader;
