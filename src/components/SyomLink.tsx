import React, { FC } from "react";
// eslint-disable-next-line import/named
import { Link, withStyles, WithStyles } from "@material-ui/core";
// eslint-disable-next-line import/named
import { Theme } from "@material-ui/core/styles";
import NextLink from "next/link";

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

const StyledLink = withStyles(theme => styles(theme))(SyomLink);

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/* eslint-disable jsx-a11y/anchor-has-content */
const UnstyledSyomLinkInternal: FC<IProps & WithStyles<typeof styles>> = React.forwardRef(({ to, classes, ...props }, ref: any) => (
  <NextLink href={to}>
    <a className={classes.link} {...props} ref={ref} />
  </NextLink>
));
/* eslint-enable jsx-a11y/anchor-has-content */

const SyomLinkInternal = withStyles(theme => styles(theme))(UnstyledSyomLinkInternal);

export {
  SyomLinkInternal
};
export default StyledLink;

