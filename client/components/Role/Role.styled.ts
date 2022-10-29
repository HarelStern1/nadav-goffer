import styled from "styled-components";
import media from "../../utils/media";

export const Wrapper = styled.div`
  margin: 60px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;

  ${media.mobile} {
    height: auto;
  }

  > h2 {
    margin: 10px 0;
  }
  > h4 {
    margin: 10px 0;
  }

  > p {
    margin: 0;
    margin-top: auto;
  }
`;
