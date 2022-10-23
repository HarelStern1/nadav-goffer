import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: ${colors.white};

  ${media.mobile} {
    height: 70vh;
  }

  > h2 {
    font-size: 70px;
    margin: 0;

    ${media.mobile} {
      font-size: 45px;
    }
  }
  > p {
    font-size: 40px;
    margin: 0 0 20px 0;
  }
`;
