import { Box, Link, Typography } from "@material-ui/core";
import React, { FC } from "react";

import { useStyles } from "./styles.jss";
import { SyomInternalLink } from "./SyomLink";

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box className={classes.footer} px={2} textAlign="center">
        <Typography style={{ fontSize: "16px", color: "white" }}>
          <SyomInternalLink
            href="/salgsvilkar"
            variant="primary"
          >
            SYOM salgvilkår
          </SyomInternalLink>
          &nbsp;&nbsp;
          {" - "}
          &nbsp;&nbsp;
          For andre henvendelser, ta kontakt med oss på:
          {" "}
          <a
            style={{ color: "white" }}
            href="mailto:maren.gulnes@syom.no"
          >
            {"maren.gulnes@syom.no"}
          </a>
        </Typography>
      </Box>
    </footer>
  );
};
