import React, { FC } from "react";
import { Box, Container, Typography, Button, Link } from "@material-ui/core";

import { useStyles } from "./styles.jss";

const SectionThree: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.brownContainer} pt={19.375} pb={16.5} textAlign="center">
      <Box className={classes.absoluteAppIcon}>
        <img src="/img/elements/appicon2.svg" alt="appikon" />
      </Box>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3">
... men skal det bli bra, trenger vi
          <Box component="span" fontWeight="300"> deg :)</Box>
        </Typography>
        <Box pt={8.625}>
          <Typography component="p">
          SYOM blir veldig bra, det er vi sikre på. Men for at det skal bli anvendbart, trenger vi deg!
          </Typography>
          <Typography component="p">
          Digger du å designe / re-designe, eller generelt idéen med å reparere klær istedenfor å kaste de?
          Eller Trenger du å få reparert et plagg, ønsker å få sydd et nytt spesialdesignet kostyme, eller helt enkelt ønsker å få sydd om noe slik at det får lengre levetid?

          Da vil vi gjerne høre fra deg.
          Vi trenger både gode
            {" "}
            <b>forslag til funksjonalitet</b>
            {" "}
og folk som vil
            {" "}
            <b>teste tjenesten</b>
.
          </Typography>
        </Box>
        <Box pt={3}>
          <Typography>
          Legg igjen navn og e-post under, så hører du fra oss. Hilsen oss i SYOM.
          </Typography>
        </Box>
        <Box mt={10.25} mb={12.75}>
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
