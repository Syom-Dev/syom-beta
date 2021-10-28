import React, { FC, useState, useEffect, MouseEvent } from "react";
import { AppBar, Container, Toolbar, MenuItem, Menu, IconButton, Box, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Link from "next/link";

import useStyles from "./Menu.jss";
import theme from "../../theme";

const TopMenu: FC = () => {
  const [activeUrl, setActiveUrl] = useState<string>();
  const classes = useStyles(theme);

  useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, []);

  const DesktopLink: FC<{href: string;}> = ({ href, children }) => (
    <Box pr={2} className={(activeUrl === href) ? classes.active : ""}>
      <Link href={href} >{children}</Link>
    </Box>
  );

  return (

    <AppBar elevation={0} className={classes.appBar} position="relative">
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="md">
          <DesktopLink href="/om-oss">Om oss</DesktopLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
