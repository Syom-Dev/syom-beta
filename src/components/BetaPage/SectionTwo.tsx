import React, { FC } from "react";
import { Box, Container, Typography } from "@material-ui/core";

import { useStyles } from "./styles.jss";

const SectionTwo: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainerSection2} pt={10.1} pb={24.25} textAlign="center">
      <Container maxWidth="md">
        <Typography component="h2" variant="h3">Hvordan skal vi gjøre det?</Typography>
        <Box pt={7.25}>
          <Typography component="p">
          SYOM skal gjøre det lettere for folk som vil gjenbruke eller fikse klær å
          komme i kontakt med de som er gode på reparasjoner og re-design.
          </Typography>
        </Box>
        <Box pt={3}>
          <Typography component="p">
          En som kan reparere eller designe klær får muligheten til å promotere eget arbeid og skaffe seg et større nettverk,
          mens andre får muligheten til å gi klærne sine lengre levetid.
          </Typography>
        </Box>
        <Box pt={3}>
          <Typography component="p">
          Dette samarbeidet tror vi på. Ved å knytte kontakt via appen blir terskelen lavere for å beholde klær fremfor å kaste dem.
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};

export default SectionTwo;
