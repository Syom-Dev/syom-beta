import React, { FC } from "react";
import { Box, Container, Typography, TextField, Button } from "@material-ui/core";

import { useStyles } from "./styles.jss";

const SectionThree: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.brownContainer} py={10} textAlign="center" pb={10}>
      <Box className={classes.absoluteAppIcon}>
        <img src="/img/elements/appicon.svg" alt="appikon" style={{ height: "120px" }} />
      </Box>
      <Container maxWidth="sm">
        <Typography component="h2" variant="h3">... men skal det bli bra, trenger vi deg :)</Typography>
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
            <TextField id="outlined-search" label="Navn Navnesen" type="search" variant="outlined" />
            &nbsp;&nbsp;
            <TextField id="outlined-search"
                       label="navn.navnesen@epost.no"
                       type="search" variant="outlined" helperText="Ugyldig epostadresse"/>
        </Box>
        <Box pt={5}>
          <Button variant="contained" className={classes.button}>Ja, jeg vil bidra!</Button>
        </Box>
        <Box pt={10}>
              <img src="img/elements/logo3.svg" alt="SYOM" />
        </Box>
      </Container>
    </Box >
  );
};

export default SectionThree;
