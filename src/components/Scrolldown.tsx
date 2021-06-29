import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonBase } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    scrolldown: {
      position: "absolute",
      bottom: "5px"
    }
  }),
);

const Scrolldown: FC = () => {
  const classes = useStyles();

  const handleScroll = () => {
    console.log("test", document.documentElement.scrollHeight)
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    }
    )
  }
  return (
    <ButtonBase className={classes.scrolldown} onClick={handleScroll}>
      <ExpandMoreIcon color="primary" fontSize="large" />
    </ButtonBase>
  );
};

export default Scrolldown;