import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 40px 12vw;
  width: 100%;
  background-color: ${colors.darkGray};
  color: ${colors.lightGrayText};
  align-items: center;

  ${media.burger} {
    flex-direction: column;
    gap: 10px;
    padding: 40px 8vw;
  }

  @media (min-width: 2000px) {
    padding: 40px 30vw;
  }
`;

export const StyledLink = styled.a`
  position: relative;
  bottom: 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    bottom: 4px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: transparent;
`;
