import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
  imageContainer: {
    background: "url(img/stock/handssewing2.png)",
    backgroundSize: "cover",
  },
  fader: {
    height: "100%",
    minHeight: theme.contentHeight,
    width: "100%",
    background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
    margin: "auto",
    textAlign: "center"
  },
  blueCircle: {
    borderRadius: "50%",
    background: theme.palette.info.main,
    color: "white",
    width: "40px",
    height: "40px",
    fontSize: "10px"
  },
  lineBox: {
    borderTop: "3px solid #E4E4E4"
  }
}));