import styled from "styled-components";
import colors from "../../utils/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  gap: 10px;

  > h2 {
    margin: 0;
    font-size: 55px;
  }

  > p {
    margin: 0;
    font-size: 20px;
    color: ${colors.lightGrayText};
  }
`;
