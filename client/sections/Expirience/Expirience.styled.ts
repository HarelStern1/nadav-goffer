import styled from "styled-components";
import media from "../../utils/media";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  /* gap: 40px; */

  ${media.burger} {
    grid-template-columns: 50% 50%;
  }

  ${media.mobile} {
    grid-template-columns: 100%;
  }
`;
