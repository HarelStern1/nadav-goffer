import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  gap: 10px;
  padding: 10px 0;

  > h2 {
    margin: 0;
    font-size: 45px;

    ${media.mobile} {
      font-size: 38px;
    }
  }

  > p {
    margin: 0;
    font-size: 20px;
    color: ${colors.lightGrayText};
    margin-top: auto;

    ${media.mobile} {
      font-size: 18px;
    }
  }
`;
