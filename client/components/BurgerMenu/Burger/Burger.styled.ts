import styled from "styled-components";
import colors from "../../../utils/colors";

export const StyledBurger = styled.div<{ open?: boolean }>`
  width: 2rem;
  height: 2rem;
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 3;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${colors.blue};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
