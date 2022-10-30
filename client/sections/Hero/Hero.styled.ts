import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Content = styled.div<{ language: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-weight: 700;

  ${media.mobile} {
    height: 50vh;
  }

  > h2 {
    font-size: ${({ language }) => (language === "he" ? "80px" : "90px")};
    margin: 0;

    ${media.mobile} {
      font-size: ${({ language }) => (language === "he" ? "45px" : "60px")};
    }
  }
  > p {
    font-size: ${({ language }) => (language === "he" ? "60px" : "60px")};
    margin: 0 0 20px 0;

    ${media.mobile} {
      font-size: ${({ language }) => (language === "he" ? "35px" : "36px")};
    }
  }
`;
