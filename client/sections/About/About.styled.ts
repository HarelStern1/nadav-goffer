import styled from "styled-components";
import Button from "../../components/Button/Button";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Wrapper = styled.div`
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

  ${media.tablet} {
    height: 36vw;
    width: 68vw;
  }

  ${media.mobile} {
    height: 320px;
    width: 90vw;
  }

  ${media.phone} {
    height: 340px;
    width: 90vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1.6;
`;

export const Description = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 26px;
  color: ${colors.white};
  padding: 20px 60px;

  ${media.burger} {
    padding: 15px 60px;
  }

  ${media.small} {
    padding: 25px 20px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid ${colors.white};
    border-bottom: none;
    border-right: none;
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
    bottom: 0;
    right: 0;
    border: 1px solid ${colors.white};
    border-top: none;
    border-left: none;
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
      font-size: 25px;
    }
  }

  > p {
    font-size: 14px;
    margin: 0;
    line-height: 24px;
    max-width: 380px;
    margin-bottom: 15px;

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

export const ButtonWrapper = styled.div`
  padding-left: 60px;

  ${media.small} {
    padding-left: 20px;
  }
`;
