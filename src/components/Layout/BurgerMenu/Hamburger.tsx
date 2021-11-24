import React from "react";

import { StyledHamburger } from "./Hamburger.styled";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Hamburger: React.FunctionComponent<Props> = (props: Props) => (
  <StyledHamburger
    open={props.open}
    onClick={(): void => props.setOpen(!props.open)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger;
