import React, { FC } from "react";
import { Box, Container, Typography, Button, ButtonBase, Link } from "@material-ui/core";

import { useStyles } from "./styles.jss";

const SectionThree: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.brownContainer} py={10} textAlign="center" pb={10}>
      <Box className={classes.absoluteAppIcon}>
        <img src="/img/elements/appicon.svg" alt="appikon" style={{ height: "120px" }} />
      </Box>
      <Container maxWidth="sm">
        <Typography component="h2" variant="h3">
... men skal det bli bra, trenger vi
          <Box component="span" fontWeight="300"> deg :)</Box>
        </Typography>
        <Box pt={5}>
          <Typography component="p">
          For hvem vet best hva en slik app trenger? Jo, brukerne!
          </Typography>
          <Typography component="p">
          Om du har en hel haug klær du ønsker å fikse,
          digger å sitte ved symaskinen eller bare er nysgjerrig på konseptet, er vi interessert i å høre fra deg!
          </Typography>
        </Box>
        <Box pt={3}>
          <Typography>
            Kunne du tenkte deg å teste dette?
          </Typography>
        </Box>
        <Box mt={4} mb={4}>
          <Button
            component={Link}
            className={classes.accceptButton}
            href="https://forms.gle/8jA5RLkscYv2Wpub9"
            target="_blank" rel="noopener noreferrer"
          >
          Ja, jeg vil bidra!
          </Button>
        </Box>

        <Box pt={5}>
          <img src="img/elements/logo3.svg" alt="SYOM" />
        </Box>
      </Container>
    </Box >
  );
};

export default SectionThree;
