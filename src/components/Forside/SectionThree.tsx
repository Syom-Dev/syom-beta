import React, { FC } from "react";
import { Box, Container, Typography, Button, Link } from "@material-ui/core";
// import Image from "next/image";

import { useStyles } from "../styles.jss";
import { AppIcon } from "../SvgIcons";
import SyomLink from "../SyomLink";

const SectionThree: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.brownContainer} pt={19.375} pb={19.5} textAlign="center">
      <Box className={classes.absoluteAppIcon}>
        {/* <img src="/img/elements/appicon3.svg" alt="appikon" /> */}
        <AppIcon />
      </Box>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3">
          ... og skal det bli bra, trenger vi
          <Box component="span" fontWeight="300"> deg :)</Box>
        </Typography>
        <Box pt={8.625}>
          <Typography component="p">
            SYOM blir veldig bra, det er vi sikre på. Nå trenger vi deg!
          </Typography>
          <Typography component="p">
            Hold deg oppdatert på hva vi gjør og få beskjed når appen lanseres ved å
            {" "}
            <SyomLink href="https://forms.gle/8jA5RLkscYv2Wpub9">registrere deg her.</SyomLink>
          </Typography>
          <Box pt={3}>
            <Typography component="p">
            Digger du å designe / re-designe, eller generelt idéen med å reparere klær i stedet for å kaste dem?
            Eller trenger du å få reparert et plagg, ønsker å få sydd et nytt spesialdesignet kostyme, eller helt enkelt ønsker å få sydd om noe slik at det får lengre levetid?

            Da vil vi gjerne høre fra deg.
            Vi trenger både gode
              {" "}
              <b>forslag til funksjonalitet</b>
              {" "}
            og folk som vil
              {" "}
              <b>teste tjenesten.</b>
            </Typography>
          </Box>
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
          <img src="img/elements/logo3.svg" alt="SYOM-logo" />
          {/* <Image src="/img/elements/logo3.svg" alt="SYOM-logo invertert" width={189} height={155} /> */}
        </Box>
      </Container>
    </Box >
  );
};

export default SectionThree;
