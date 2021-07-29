import React, { FC } from "react";
import { Box, Container, Typography } from "@material-ui/core";

import { useStyles } from "./styles.jss";

const SectionTwo: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainerSection2} py={10} textAlign="center" pb={10}>
      <Container maxWidth="sm">
        <Typography component="h2" variant="h3">Slik designer vi appen</Typography>
        <Box pt={5}>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box pt={3}>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};

export default SectionTwo;