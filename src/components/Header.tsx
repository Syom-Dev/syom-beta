import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Typography } from "@material-ui/core"
import Scrolldown from "./Scrolldown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      height: theme.contentHeight,
      width: "100%",
      margin: "auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "url(img/cover.jpg)",
      backgroundSize: "cover"
    }
  }),
);

const SyomHeader: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer} >
      <Container>
        <Typography variant="h1" color="primary">
          Syom
        </Typography>
        <Box py={5}>
          <Typography component="p" variant="h5" color="primary">
            Langt liv for klærne
          </Typography>
        </Box>
        <Scrolldown />
      </Container>
    </div>
  );
};

export default SyomHeader;