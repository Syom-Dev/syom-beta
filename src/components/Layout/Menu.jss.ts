import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  floatingAppBar: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      position: "fixed",
      background: "rgba(0,0,0,0.7)",
      top: 0,
      bottom: 0,
      maxWidth: "100px",
      right: 0
    }
  },
  toolbar: {
    height: "100%",
    paddingLeft: "1rem"
  },

  floatingMenu: {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-evenly",
    "alignItems": "flex-start",
    "height": "100%",
    "& > div": { fontWeight: 300 }
  },

  active: {
    color: theme.palette.secondary.main
  },

  appBar: {
    background: "transparent",
    position: "absolute"
  }
}));
