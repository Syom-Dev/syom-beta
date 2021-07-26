import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Typography } from "@material-ui/core"
import Image from 'next/image'

import Scrolldown from "./Scrolldown";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      height: "100%",
      width: "100%",
      margin: "auto",
      position: "relative",

      "&::before": {
        content: "''",
        display: "block",
        background: "url(img/sewdoll.jpg)",
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
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
  }),
);

const SyomHeader: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer} >
      <Box className={classes.fader} py={5}>
        <Container>
          <img src="/img/elements/logo1.png" alt="SYOM" style={{ height: "100px" }} />

          <Box py={5}>
            <Typography component="p" variant="h5">
              Langt liv for klærne
            </Typography>
          </Box>

          <img src="/img/elements/appview.png" alt="SYOM" style={{ height: "300px" }} />

          <hr />
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