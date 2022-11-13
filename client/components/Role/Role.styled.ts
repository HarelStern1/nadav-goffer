import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Wrapper = styled.div`
  margin: 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.darkGray};
  text-align: center;
  border-radius: 10px;
  height: 240px;
  ${media.mobile} {
    height: auto;
  }

  > h2 {
    margin: 10px 0;
    font-size: 24px;
  }
  > h4 {
    margin: 10px 0;
  }

  > p {
    margin: 0;
    margin-top: auto;
    color: ${colors.yellow};
  }
`;
