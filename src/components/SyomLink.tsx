import React, { FC } from "react";
import { Link, withStyles, WithStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const styles = (theme: Theme): any => ({
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    fontWeight: "bold"
  }
});

const SyomLink: FC<{href: string;} &WithStyles<typeof styles>> = ({ href, children, classes }) => (
  <Link
    className={classes.link}
    href={href}
    target="_blank" rel="noopener noreferrer"
  >
    {children}
  </Link>
);

export default withStyles(theme => styles(theme))(SyomLink);

