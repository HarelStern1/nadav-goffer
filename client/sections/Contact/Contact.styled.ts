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

export const Input = styled.input<{ language: string }>`
  width: 50%;
  height: 38px;
  padding: 16px 0;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  color: ${colors.lightGrayText};
  text-align: ${({ language }) => (language === "en" ? "right" : null)};
  padding-right: ${({ language }) => (language === "en" ? "10px" : null)};

  ${media.mobile} {
    font-size: 13px;
    padding-left: 10px;
  }
`;

export const LongInput = styled.input<{ language: string }>`
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
  text-align: ${({ language }) => (language === "en" ? "right" : null)};
  padding-right: ${({ language }) => (language === "en" ? "10px" : null)};

  ${media.mobile} {
    font-size: 13px;
    padding-left: 10px;
  }
`;

export const Row = styled.div<{ language: string }>`
  display: flex;
  gap: 12px;
  flex-direction: ${({ language }) =>
    language === "en" ? "row-reverse" : null};
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
  height: 50px;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const Greeting = styled.div<{ language: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: ${({ language }) => (language === "en" ? "flex-end" : null)};

  > h2 {
    color: ${colors.yellow};
    font-size: 32px;
    margin: 0;
    text-align: ${({ language }) => (language === "en" ? "right" : null)};
  }
  > p {
    font-size: 16px;
    color: ${colors.lightGrayText};
    margin: 0;
    margin-bottom: 15px;
  }
`;

export const Info = styled.div<{ language: string }>`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: ${({ language }) => (language === "en" ? "flex-end" : null)};

  > h2 {
    color: ${colors.yellow};
    font-size: 32px;
    margin: 0;
    white-space: pre-line;
    text-align: ${({ language }) => (language === "en" ? "right" : null)};

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

export const ButtonsWrapper = styled.div<{ language: string }>`
  position: relative;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: ${({ language }) =>
    language === "en" ? "row-reverse" : null};
`;

export const ReCaptcha = styled.div``;

export const Message = styled.p<{ language: string }>`
  margin: 5px 0;
  color: ${colors.darkGray};
  text-align: ${({ language }) => (language === "en" ? "right" : null)};

  ${media.mobile} {
    font-size: 15px;
  }
`;
