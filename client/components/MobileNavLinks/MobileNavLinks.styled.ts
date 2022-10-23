import styled, { css } from "styled-components";
import colors from "../../utils/colors";

export const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 65vw;
  height: 100vh;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding-top: 200px;
`;

export const StyledLink = styled.a<{ active: number }>`
  transition: all 0.3s ease;
  color: ${colors.lightGrayText};
  font-size: 18px;
  font-weight: 400;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    transition: width 0.3s ease;
    height: 2px;
    width: 0px;
    border-radius: 4px;
    background-color: ${colors.blue};
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${colors.blue};
  }

  ${({ active }) => {
    return css`
      &:nth-child(${active + 1}) {
        color: ${colors.blue};
        &::after {
          width: 100%;
        }
      }
    `;
  }};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
