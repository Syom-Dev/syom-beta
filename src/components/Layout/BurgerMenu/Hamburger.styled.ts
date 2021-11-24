import styled from "styled-components";

export const StyledHamburger = styled.button<{ open: boolean; }>`
  top: 5%;
  right: ${({ open }): string => (open ? "24vh" : "4%")};
  width: 2rem;
  height: 2rem;
  position: fixed;
  background: transparent;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    left: ${({ open }): string => (open ? "37vh" : "4%")};
  }

  @media (max-width: 600px) {
    top: 3%;
    left: ${({ open }): string => (open ? "85%" : "4%")};
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      div {
        background-color: white;

        @media (max-width: 600px) {
          background-color: brown};
        }
      }
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: blue;

    @media (min-width: 600px) {
      background-color: $brown;
    }

    :first-child {
      transform: ${({ open }): string => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }): string => (open ? "0" : "1")};
      transform: ${({ open }): string => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }): string => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
