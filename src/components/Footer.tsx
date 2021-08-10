import { Box } from "@material-ui/core";
import React, { FC } from "react";

import { useStyles } from "./BetaPage/styles.jss";

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box className={classes.footer}>
        <text>Exercitation veniam consequat sunt</text>
    &nbsp;
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"nostrud amet"}
        </a>
      </Box>
    </footer>
  );
};
