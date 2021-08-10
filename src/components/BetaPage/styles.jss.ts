import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
  imageContainer: {
    background: "url(img/stock/handsewing6.jpg)",
    backgroundSize: "cover",

    [theme.breakpoints.down("md")]: {
      background: "url(img/stock/handsewing5.jpg)",
      backgroundSize: "cover"
    }
  },

  imageContainerSection2: {
    background: "url(img/stock/planning.png)",
    backgroundSize: "cover"
  },
  brownContainer: {
    position: "relative",
    background: "#4D4D4D",
    color: "white"
  },
  fader: {
    height: "100%",
    width: "100%",
    background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.95) 60%, rgba(255,255,255,1) 100%)",
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
  },
  absoluteAppIcon: {
    position: "absolute",
    top: "-50px",
    left: 0,
    right: 0
  },
  textField: {
    borderRadius: "4px",
    borderColor: "#000000",
    paddingTop: "10pt"
  },
  cssLabel: {
    color: "#808483"
  },
  focused: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#EAAE92 !important"
  },
  textFieldInput: {
    backgroundColor: "#FFFFFF"
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    background: "#3ACC9F",
    textTransform: "none",
    color: "#FFFFFF",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "15px"
  },
  input: {
    display: "none"
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    paddingTop: "8pt",
    paddingBottom: "8pt",
    background: "#C1BEA3"
  },
  googleFormWrapper: {
    position: "relative",
    overflow: "hidden",
    height: "600px"
  },
  googleForm: {
    position: "absolute",
    top: "-145px",
    left: "0",
    right: "0"
  },
  iframe: {
    height: "800px",
    width: "577px"
  },
  [theme.breakpoints.down("xs")]: {
    iframe: {
      height: "995px",
      width: "303px"
    },
    googleFormWrapper: {
      position: "relative",
      overflow: "hidden",
      height: "690px"
    },
    googleForm: {
      position: "absolute",
      top: "-144px"
    }
  }
}));
