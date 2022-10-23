import styled, { css } from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

// Section
export const StyledSection = styled.section<{
  padding?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
}>`
  position: relative;
  padding: ${({ padding }) => (padding ? padding : "7vmax 10vw")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : colors.white};

  ${({ backgroundImage, backgroundOpacity }) =>
    backgroundImage
      ? css`&:before {
          content: "";
          background-image: url(${backgroundImage});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          opacity: ${backgroundOpacity};`
      : null}
`;

// Content
export const Content = styled.div<{
  align?: string;
  justify?: string;
  column?: boolean;
}>`
  position: relative;
  max-width: 1440px;
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};

  ${media.desktop} {
    margin: 0 auto;
  }

  ${({ column }) => {
    if (column) {
      return css`
        ${media.tablet} {
          flex-direction: column-reverse;
          gap: 60px;
        }
      `;
    }
  }}
`;
