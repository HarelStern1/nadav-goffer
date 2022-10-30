import styled, { css } from "styled-components";
import { MediaQuery } from "../../hooks/useMediaQuery";
import colors from "../../utils/colors";

export const Wrapper = styled.div<{
  isMobile?: MediaQuery;
  open?: boolean;
  language: string;
}>`
  display: flex;
  align-items: center;
  gap: 45px;
  justify-content: space-between;
  flex-direction: ${({ language }) =>
    language === "he" ? "row" : "row-reverse"};
`;

export const StyledLink = styled.a<{ active: number }>`
  transition: all 0.3s ease;
  color: ${colors.lightGrayText};
  font-size: 16px;
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
    background-color: ${colors.yellow};
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${colors.darkGray};
  }

  ${({ active }) => {
    return css`
      &:nth-child(${active + 1}) {
        color: ${colors.darkGray};
        &::after {
          width: 100%;
        }
      }
    `;
  }};
`;
