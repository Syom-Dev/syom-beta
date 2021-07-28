import React, { FC } from "react";
import { Box, Container, Typography } from "@material-ui/core";

import { useStyles } from "./styles.jss";

const SectionTwo: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer} >
      <Box className={classes.fader} py={10} >
        <Container maxWidth="sm">
          <Typography>Hello</Typography>
        </Container>
      </Box>
    </Box >
  );
};

export default SectionTwo;
