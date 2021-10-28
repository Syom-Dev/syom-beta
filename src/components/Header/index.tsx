import React, { FC } from "react";
// eslint-disable-next-line import/named
import { Box, Container, Typography, withStyles, WithStyles } from "@material-ui/core";

import { styles } from "./styles.jss";

const SmallSyomHeader: FC<WithStyles<typeof styles>> = ({ children, classes }) => (
  <Box className={classes.imageContainer} >
    <Box className={classes.fader} pt={11.5} pb={15}>
      <Container maxWidth="md">
        <Box>
          <img src="/img/elements/logo1.svg" alt="Syom logo" style={{ width: "150px" }} />
        </Box>
        {children}
      </Container>
    </Box>
  </Box >
);

export default withStyles(theme => styles(theme))(SmallSyomHeader);

