import React, { FC } from "react";
// eslint-disable-next-line import/named
import { Link, withStyles, WithStyles } from "@material-ui/core";
// eslint-disable-next-line import/named
import { Theme } from "@material-ui/core/styles";
import NextLink from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const styles = (theme: Theme): any => ({
  secondaryLink: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  primaryLink: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    fontWeight: "bold"
  }
});

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
}

const UnstyledSyomExternalLink: FC<LinkProps & WithStyles<typeof styles>> = ({ href, variant = "secondary", children, classes }) => (
  <Link
    className={variant === "secondary" ? classes.secondaryLink : classes.primaryLink}
    href={href}
    target="_blank" rel="noopener noreferrer"
  >
    {children}
  </Link>
);

const SyomExternalLink = withStyles(theme => styles(theme))(UnstyledSyomExternalLink);

/* eslint-disable jsx-a11y/anchor-has-content */
const UnstyledSyomInternalLink: FC<LinkProps & WithStyles<typeof styles>> = React.forwardRef(({ href, variant = "secondary", classes, ...props }, ref: any) => (
  <NextLink href={href}>
    <a className={`${variant === "secondary" ? classes.secondaryLink : classes.primaryLink}`} {...props} ref={ref} />
  </NextLink>
));
/* eslint-enable jsx-a11y/anchor-has-content */

const SyomInternalLink = withStyles(theme => styles(theme))(UnstyledSyomInternalLink);

export {
  SyomInternalLink
};
export default SyomExternalLink;

