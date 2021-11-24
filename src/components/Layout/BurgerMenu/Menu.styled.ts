import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean; }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30vh;
  padding-left: 2em;
  padding-top: 20vh;
  background-color: brown;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }): string => (open ? "translateX(0)" : "translateX(100%)")};
  @media (max-width: 900px) {
    width: 40vw;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: red;
  text-decoration: none;

  :hover {
    color: blue;
  }
`;
