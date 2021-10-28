import React, { FC } from "react";
import { Box, Container, Typography, Button, Link } from "@material-ui/core";
import Image from "next/image";

import { useStyles } from "../styles.jss";

const SectionDonation: FC = () => {
  const classes = useStyles();

  return (
    <Box id="donasjon" className={classes.imageDonation} pt={19.375} pb={16.5} textAlign="center">
      <Box className={classes.absoluteVippsIcon}>
        <Image src="/img/vipps-qr-1.png" alt="Vipps QR" width={180} height={180} />
      </Box>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3">
          Vil du spandere en lunsj?
        </Typography>

        <Box pt={8}>
          <Typography component="p">
              Skann QR-koden over eller søk oss opp med
          </Typography>
        </Box>

        <Box pt={4}>
          <Typography component="p" variant="h6">
            Vippsnummer #715533
          </Typography>
        </Box>

        <Box pt={8.625}>
          <Typography component="p">
              Vi er veldig takknemlig for alle donasjoner.
          </Typography>
          <Typography component="p">
              Støtten vil selvfølgelig gå til videre utvikling av applikasjonen og drifting av tjenesten. :)
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};

export default SectionDonation;
