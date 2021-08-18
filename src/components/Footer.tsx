import { Box, Typography } from "@material-ui/core";
import React, { FC } from "react";

import { useStyles } from "./BetaPage/styles.jss";

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box className={classes.footer} px={2} textAlign="center">
        <Typography style={{ fontSize: "16px", color: "white" }}>
For andre henvendelser, ta kontakt med oss på
    &nbsp;
          <a
            style={{ color: "white" }}
            href="mailto:maren.gulnes@gmail.com"
          >
            {"maren.gulnes@gmail.com"}
          </a>
        </Typography>
      </Box>
    </footer>
  );
};
