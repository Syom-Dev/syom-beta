import React, { FC } from "react";
import { Box, Container, Typography } from "@material-ui/core";
import Image from "next/image";

import { useStyles } from "./styles.jss";

const DonationSection: FC<{brown?: boolean;}> = ({ brown = true }) => {
  const classes = useStyles();

  return (
    <Box className={brown ? classes.brownContainer : classes.imageContainerSection2} pt={19} pb={16.5} textAlign="center">
      <Container maxWidth="md">
        <Typography component="h2" variant="h3">
          Vil du spandere lunsj på oss?
        </Typography>
        <Box pt={12}>
          <Image src="/img/vipps-qr.png" alt="Vipps QR" width={300} height={300} />
        </Box>
        <Box pt={5}>
          <Typography component="p" variant="h6">
            Syom
          </Typography>
        </Box>
        <Box pt={5}>
          <Typography component="p" variant="h6">
            #715533
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

export default DonationSection;
