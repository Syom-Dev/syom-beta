// eslint-disable-next-line import/named
import { Theme } from "@material-ui/core/styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const styles = (theme: Theme): any => ({
  imageContainer: {
    background: "url(img/stock/cover-bw.jpg)",
    backgroundSize: "cover"

    // [theme.breakpoints.down("md")]: {
    //   background: "url(img/stock/handsewing5.jpg)",
    //   backgroundSize: "cover"
    // }
  },
  fader: {
    height: "100%",
    width: "100%",
    background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.99) 60%, rgba(255,255,255,1) 100%)",
    margin: "auto",
    textAlign: "center"
  }
});

