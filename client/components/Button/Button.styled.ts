import styled, { css } from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const StyledButton = styled.button<{
  stroke?: string;
  responsive?: boolean;
  language: string;
}>`
  padding: 14px 30px;
  min-width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ language }) => (language === "he" ? "16px" : "18px")};
  color: ${colors.white};
  border: 2px solid ${colors.yellow};
  border: ${({ stroke }) => (stroke ? `2px solid ${colors.yellow}` : "none")};
  background-color: ${({ stroke }) => (stroke ? "transparent" : colors.yellow)};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.yellow};
  }

  ${({ responsive }) => {
    if (responsive) {
      return css`
        ${media.burger} {
          font-size: 16px;
          padding: 15px 30px;
          width: 95%;
        }
      `;
    }
  }}
`;
