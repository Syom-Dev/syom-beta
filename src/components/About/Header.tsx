import React, { FC } from "react";
// eslint-disable-next-line import/named
import { Box, Container, Typography, withStyles, WithStyles } from "@material-ui/core";
import Link from "next/link";

import { styles } from "./styles.jss";

const SmallSyomHeader: FC<WithStyles<typeof styles>> = ({ classes }) => (
  <Box className={classes.imageContainer} >
    <Box className={classes.fader} pt={11.5} pb={15}>
      <Container maxWidth="md">
        <Box>
          <Link href="/" aria-label="Syom Logo - tilbake til forsiden">
            <img src="/img/elements/logo1.svg" alt="" style={{ width: "150px" }} />
          </Link>
        </Box>
        <Typography component="h1" variant="h2">Teamet</Typography>
      </Container>
    </Box>
  </Box >
);

export default withStyles(theme => styles(theme))(SmallSyomHeader);

