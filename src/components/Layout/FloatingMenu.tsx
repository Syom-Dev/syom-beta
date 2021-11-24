import React, { FC, useState, useEffect, useCallback } from "react";
import { AppBar, ButtonBase, Button, Menu, Box, Drawer, SwipeableDrawer, Toolbar } from "@material-ui/core";
import { useRouter } from "next/router";

import useStyles from "./Menu.jss";
import theme from "../../theme";
import ScrollTop from "./ScrollToTop";

const FloatingMenu: FC = () => {
  const [activeUrl, setActiveUrl] = useState<string>();

  const classes = useStyles(theme);
  const router = useRouter();

  useEffect(() => {
    setActiveUrl(window.location.pathname);
  }, []);

  // The scroll listener
  const handleScroll = useCallback(() => {
    const elements = [
      getElementById("#hvorfor"),
      getElementById("#hvordan"),
      getElementById("#bli-med"),
      getElementById("#donasjon")
    ];
    let newActiveUrl = "";

    elements.forEach(elem => {
      if (elem && isInViewport(elem)) {
        newActiveUrl = `#${elem.id}`;
      }
    });
    setActiveUrl(newActiveUrl);
  }, []);

  // Attach the scroll listener to the div
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const getElementById = (id: string): HTMLElement => document.querySelector(
    id
  );

  const isInViewport = (el: HTMLElement): boolean => {
    const rect = el.getBoundingClientRect();

    const mid = (rect.top + rect.bottom) / 2;

    return (
      (mid >= 0 && mid <= window.innerHeight * 0.75)
      || (rect.top < 0 && rect.bottom > window.innerHeight)
    );

  };

  const DesktopLink: FC<{id: string;}> = ({ id, children }) => {

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
      const target = event.target as HTMLDivElement;
      const link = target.id;

      if (router.pathname !== "/") {
        router.push(`/${target.id}`);

        return;
      }

      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        link
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <ButtonBase
        id={id}
        component="div"
        onClick={handleClick}
        role="presentation"
        className={(activeUrl === id) ? classes.active : ""}
      >
        {children}
      </ButtonBase>
    );
  };

  return (
    <AppBar elevation={0} className={classes.floatingAppBar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <div className={classes.floatingMenu}>
          <DesktopLink id="#hvorfor">Hvorfor</DesktopLink>
          <DesktopLink id="#hvordan">Hvordan</DesktopLink>
          <DesktopLink id="#bli-med">Bli med</DesktopLink>
          <DesktopLink id="#donasjon">Lunsj?</DesktopLink>
          <ScrollTop />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FloatingMenu;
