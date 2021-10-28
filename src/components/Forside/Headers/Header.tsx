import React, { FC } from "react";
import { Button, Link, Box, Container, Typography } from "@material-ui/core";

import { useStyles } from "../../styles.jss";

const SyomHeader: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer} >
      <Box className={classes.fader} pt={11.5} pb={15}>
        <Container maxWidth="md">
          <Box>
            <img src="/img/elements/logo1.svg" alt="Syom logo" />
          </Box>
          <Box mt={5} mb={1.625} >
            <Typography component="p" variant="h5">
              Langt liv for klærne
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Box mt={2} mb={1.625}>
                <Typography component="p" align="left" >
              Et felleskap for reparasjon, redisign (generell fiksing) av klær og tekstiler.
                </Typography>
              </Box>

              <Box mt={2} mb={1.625}>

                <Typography component="p" align="left" >
              Lanseres om kort tid i
                </Typography>
                <Typography component="p" align="left" >
                  {" "}
                  <b>App Store</b>
                  {" "}
og
                  {" "}
                  <b>Google Play</b>
!
                </Typography>
              </Box>
            </Box>

            <Box>
              <img src="/img/elements/appview3.svg" alt="En telefon med SYOM-logo" style={{ maxHeight: "657px", maxWidth: "100%" }} />
            </Box>
          </Box>

          <Box pt={8.125} pb={8.125} className={classes.lineBox} />
          <Container>
            <Box pb={9}>
              <Typography component="h1" variant="h3">
                Hvorfor SYOM?
              </Typography>
            </Box>
            <Typography component="p">
            Alle trenger klær! Enten du har en lidenskap for mote
            eller er mest opptatt av å beskytte deg mot kulda. Dessverre er
            tekstilindustrien en miljøversting som er med å tømme jordens naturressurser.
            </Typography>
            <Typography component="p">
            Dette vil vi i SYOM gjøre noe med!
            Vi skal gjøre det enkelt for folk å få reparert eller sydd om klær.
            Det vil føre til lengre levetid for hvert plagg og mindre forbruk av jordens ressurser.
            </Typography>
            <Typography component="p">
            Vil du bidra?
              {" "}
              <Link
                className={classes.link}
                href="https://forms.gle/8jA5RLkscYv2Wpub9"
                target="_blank" rel="noopener noreferrer"
              >
                Bli en betatester for SYOM!
              </Link>
            </Typography>
            <Box pt={8.125}>
              <img src="/img/elements/logo2.png" alt="SYOM logo" style={{ height: "82px" }} />

            </Box>
          </Container>
        </Container>
      </Box>
    </Box >
  );
};

export default SyomHeader;
