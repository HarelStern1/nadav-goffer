import styled, { css } from "styled-components";
import Button from "../../components/Button/Button";
import { Language } from "../../context/AppContext";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const SectionWrapper = styled.div`
  ${media.mobile} {
    margin-bottom: 80px;
  }
`;

export const Wrapper = styled.div<{ language: string }>`
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 32vw;
  width: 68vw;
  padding: 5vw 3vw;
  max-width: 1440px;
  background-color: ${colors.darkGray};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  flex-direction: ${({ language }) =>
    language === "he" ? "row" : "row-reverse"};

  ${media.tablet} {
    height: 36vw;
    width: 68vw;
  }

  ${media.mobile} {
    height: 320px;
    width: 90vw;
  }

  ${media.phone} {
    height: 380px;
    width: 90vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1.6;
`;

export const Description = styled.div<{ language: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${({ language }) =>
    language === "he" ? "flex-start" : "flex-end"};
  flex-direction: column;
  gap: 26px;
  color: ${colors.white};
  padding: 20px 60px;

  ${media.burger} {
    padding: 15px 60px;
  }

  ${media.small} {
    padding: 0 25px 20px;
  }

  &::after {
    content: "";
    position: absolute;
    border: 1px solid ${colors.white};

    ${({ language }) => {
      if (language === "he") {
        return css`
          top: 0;
          left: 0;
          border-bottom: none;
          border-right: none;
        `;
      } else {
        return css`
          bottom: 0;
          left: 0;
          border-top: none;
          border-right: none;
        `;
      }
    }}

    height: 55px;
    width: 55px;

    ${media.burger} {
      height: 35px;
      width: 35px;
    }

    ${media.mobile} {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    border: 1px solid ${colors.white};

    ${({ language }) => {
      if (language === "he") {
        return css`
          bottom: 0;
          right: 0;
          border-top: none;
          border-left: none;
        `;
      } else {
        return css`
          top: 0;
          right: 0;
          border-bottom: none;
          border-left: none;
        `;
      }
    }}

    height: 55px;
    width: 55px;

    ${media.burger} {
      height: 35px;
      width: 35px;
    }
    ${media.mobile} {
      display: none;
    }
  }

  > h2 {
    font-size: 45px;
    margin: 0;

    ${media.burger} {
      font-size: 26px;
    }
  }

  > p {
    font-size: 16px;
    margin: 0;
    line-height: 26px;
    max-width: 380px;
    margin-bottom: 15px;
    text-align: ${({ language }) => (language === "he" ? "left" : "right")};

    ${media.burger} {
      margin-bottom: 0;
      font-size: 14px;
    }
  }
`;

export const Figure = styled.figure`
  flex: 1;
  display: flex;
  justify-content: center;

  ${media.tablet} {
    display: none;
  }
`;

export const ButtonWrapper = styled.div<{ language: string }>`
  ${({ language }) => {
    if (language === "he") {
      return css`
        padding-left: 60px;
      `;
    } else {
      return css`
        padding-right: 60px;
        align-self: flex-end;
      `;
    }
  }}

  ${media.small} {
    ${({ language }) => {
      if (language === "he") {
        return css`
          padding-left: 5%;
        `;
      } else {
        return css`
          padding: 0;
          padding-right: 5%;
        `;
      }
    }}
  }
`;
