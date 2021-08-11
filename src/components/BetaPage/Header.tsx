import React, { FC } from "react";
import { Button, Link, Box, Container, Typography } from "@material-ui/core";

import { useStyles } from "./styles.jss";
// import Scrolldown from "../Scrolldown";

const SyomHeader: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer} >
      <Box className={classes.fader} py={10} >
        <Container maxWidth="sm">
          <Box>
            <img src="/img/elements/logo1.svg" alt="Syom" />
          </Box>
          <Box pt={4} pb={3}>
            <Typography component="p" variant="h5">
              Langt liv for klærne
            </Typography>
          </Box>

          {/* <Box mt={4} mb={4} style={{ display: "none" }}>
            <Button
              component={Link}
              className={classes.accceptButton}
              href="https://forms.gle/8jA5RLkscYv2Wpub9"
              target="_blank" rel="noopener noreferrer"
            >
          Ja, jeg vil bidra!
            </Button>
          </Box> */}

          <Box>
            <img src="/img/elements/appview.svg" alt="SYOM" style={{ maxHeight: "300px" }} />
          </Box>

          <Box display="flex" justifyContent="center" pb={4}>
            <Box
              className={classes.blueCircle}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography component="p" style={{ fontSize: "10px" }}>BETA</Typography>
            </Box>
          </Box>

          <Box pt={2} pb={4} className={classes.lineBox} />
          <Container>
            <Box pb={4}>
              <Typography component="h1" variant="h3">
                Hvorfor SYOM?
              </Typography>
            </Box>
            <Typography component="p">
            Alle trenger klær.
            Om du er lidenskapelig opptatt av mote, eller kun benytter klær for å dekke til private områder.
            Ikke rart at vi i dag produserer klær for flere ressurser enn det jorden naturlig kan produsere.
            Vi i SYOM ønsker å gjøre noe med dette!
            Ved å gjøre det enkelt å få reparert eller redesignet klær ønsker vi å forlenge klærnes levetid og ved det redusere forbruket av klær.
            </Typography>
            <Typography component="p">
              Ved å bli en del av SYOM kan du bidra til dette!
            </Typography>
            <Box pt={4}>
              <img src="/img/elements/logo1.svg" alt="SYOM" style={{ height: "40px" }} />
            </Box>
          </Container>
          {/* <Scrolldown /> */}
        </Container>
      </Box>
    </Box >
  );
};

export default SyomHeader;
