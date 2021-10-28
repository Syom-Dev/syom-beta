import React from "react";
import { Fab } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
//   children: React.ReactElement;
// }

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: "25px"
  }
}));

const ScrollTop = (): JSX.Element => {
  const classes = useStyles();
  //   // Note that you normally won't need to set the window ref as useScrollTrigger
  //   // will default to window.
  //   // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      "#top"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  );
};

// const BackToTop = (props: Props): JSX.Element => (
//   <>
//     <CssBaseline />
//     <AppBar>
//       <Toolbar>
//         <Typography variant="h6">Scroll to see button</Typography>
//       </Toolbar>
//     </AppBar>
//     <Toolbar id="back-to-top-anchor" />
//     <Container>
//       <Box my={2}>
//         {[...new Array(12)]
//           .map(
//             () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//           )
//           .join("\n")}
//       </Box>
//     </Container>
//     <ScrollTop {...props}>
{ /* <Fab color="secondary" size="small" aria-label="scroll back to top">
  <KeyboardArrowUpIcon />
</Fab>; */ }
//     </ScrollTop>
//   </>
// );

export default ScrollTop;
