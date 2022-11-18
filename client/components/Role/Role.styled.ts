import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Wrapper = styled.div`
  margin: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${colors.darkGray};
  text-align: center;
  border-radius: 10px;
  height: 260px;
  ${media.mobile} {
    height: auto;
  }

  > h2 {
    font-size: 24px;
    margin-top: auto;
  }
  > h4 {
    margin-top: auto;
  }

  > p {
    margin: 0;
    margin-top: auto;
    color: ${colors.yellow};
  }
`;
