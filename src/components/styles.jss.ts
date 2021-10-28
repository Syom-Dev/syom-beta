// eslint-disable-next-line import/named
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
    position: "relative",
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
    width: "53px",
    height: "53px",
    fontSize: "10px",
    marginTop: "-16px",
    boxShadow: "0 4px 4px 0px rgb(0 0 0 / 25%)"
  },
  lineBox: {
    borderTop: "3px solid #E4E4E4"
  },
  absoluteAppIcon: {
    position: "absolute",
    top: "-113px",
    left: 0,
    right: 0
  },
  absoluteVippsIcon: {
    position: "absolute",
    top: "-85px",
    left: 0,
    right: 0
  },
  imageDonation: {
    "position": "relative",
    "&::after": {
      content: "''",
      background: "url(img/stock/food2.jpg)",
      backgroundSize: "cover",
      opacity: 0.15,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      zIndex: -1
    }
  },
  accceptButton: {
    "borderRadius": "5em",
    "background": "#3ACC9F",
    "textTransform": "none",
    "color": "#FFFFFF",
    "alignItems": "center",
    "padding": "0.9rem 2.8rem",
    "minHeight": "75px",
    "minWidth": "268px",
    "fontSize": "21px",
    "fontWeight": "bold",
    "boxShadow": "0 4px 45px rgb(0 0 0 / 40%)",
    "&:hover": {
      color: theme.palette.grey[700],
      background: theme.palette.grey[100],
      textDecoration: "none"
    }
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
  },
  textField: {
    borderRadius: "4px",
    borderColor: "#000000",
    paddingTop: "10pt"
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
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    fontWeight: "bold"
  }
}));
