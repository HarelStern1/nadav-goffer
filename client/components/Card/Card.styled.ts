import styled from "styled-components";
import colors from "../../utils/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 290px;
  height: 280px;
  padding: 67px 40px 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover {
    > div > div {
      top: -8px;
    }

    > div > p {
      top: 8px;
    }

    > div > figure {
      width: 140px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid ${colors.lightGrayBorder};
    border-top: none;
    border-left: none;
    height: calc(100% - 35px);
    width: calc(100% - 35px);
    transition: all 0.3s ease;
  }

  &:hover::before {
    height: 99.5%;
    width: 99.5%;
    border-color: ${colors.yellow};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid ${colors.lightGrayBorder};
    border-bottom: none;
    border-right: none;
    height: calc(100% - 35px);
    width: calc(100% - 35px);
    transition: all 0.3s ease;
  }

  &:hover::after {
    height: 99.5%;
    width: 99.5%;
    border-color: ${colors.yellow};
  }
`;

export const Top = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: top 0.3s ease;

  > h2 {
    margin: 5px 15px 20px 15px;
  }
`;

export const Divider = styled.figure`
  height: 2px;
  width: 48px;
  background-color: ${colors.yellow};
  transition: all 0.3s ease;
  margin: 0;
`;

export const Paragraph = styled.p`
  position: relative;
  top: 0;
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease;
  line-height: 24px;
  color: ${colors.lightGrayText};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  margin: 0;
`;
