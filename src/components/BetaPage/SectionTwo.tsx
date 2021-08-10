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
          Har du noen gang hatt et hull i en bukse og bare lagt den bakerst i skapet fordi du ikke orker å reparere det?
          Da er du ikke alene! De fleste ønsker ikke å kaste klær selv om de får et hull eller en rift.
          Samtidig er det flere ildsjeler som liker å reparere og re-designe klær.
          Vi ønsker å gjøre terskelen for å få fikset klær lavere ved å enkelt koble sammen de som ønsker å få klær reparert med de som kunne tenke seg å reparere klær.
          </Typography>
        </Box>
        <Box pt={3}>
          <Typography component="p">
          Appen gjør dette ved å la brukere opprette oppdrag der det informeres om plagget eller plaggene som skal fikses eller re-designes som de som reparerer kan se igjennom og svare på.
          På denne måten håper vi at terskelen for å beholde klær fremfor å kaste dem skal bli lavere.
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};

export default SectionTwo;
