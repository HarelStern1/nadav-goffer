import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Wrapper = styled.section`
  background-color: ${colors.darkGray};
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 150px 100px;

  ${media.burger} {
    flex-direction: column;
    gap: 100px;
    height: auto;
  }

  ${media.small} {
    padding: 150px 50px;
  }
  ${media.phone} {
    padding: 80px 20px;
  }
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 50%;
  height: 38px;
  padding: 16px 0;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  color: ${colors.lightGrayText};

  ${media.mobile} {
    font-size: 13px;
    padding-left: 10px;
  }
`;

export const LongInput = styled.input`
  width: 100%;
  height: 100px;
  padding: 16px 0;
  padding-bottom: 60px;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  color: ${colors.lightGrayText};

  ${media.mobile} {
    font-size: 13px;
    padding-left: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 12px;

  ${media.phone} {
    width: auto;
    min-width: 330px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 30%;
  padding: 14px 20px;
  font-size: 17px;
  color: ${colors.white};
  background-color: ${colors.yellow};
  cursor: pointer;
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > h2 {
    color: ${colors.yellow};
    font-size: 32px;
    margin: 0;
  }
  > p {
    font-size: 16px;
    color: ${colors.lightGrayText};
    margin: 0;
    margin-bottom: 15px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h2 {
    color: ${colors.yellow};
    font-size: 32px;
    margin: 0;
    white-space: pre-line;

    ${media.phone} {
      white-space: normal;
      margin-top: 40px;
    }
  }
  > h3 {
    font-size: 18px;
    color: ${colors.lightGrayText};
    font-weight: 300;
    margin: 6px 0;
  }
  > a {
    font-size: 18px;
    color: ${colors.white};
    transition: all 0.3s ease;

    &:hover {
      color: #0072b1;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 100px;
`;

export const ReCaptcha = styled.div``;
