import React, { useState, useRef } from "react";

import Hamburger from "./Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";
import { useOnClickOutside } from "../hooks";

const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = (): void => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={(): void => close()}>Link 1</StyledLink>
        <StyledLink onClick={(): void => close()}>Link 2</StyledLink>
        <StyledLink onClick={(): void => close()}>Link 3</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
