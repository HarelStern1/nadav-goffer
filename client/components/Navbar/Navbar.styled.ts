import styled from "styled-components";
import colors from "../../utils/colors";
import media from "../../utils/media";

export const Wrapper = styled.nav<{
  shadow: boolean;
}>`
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: ${colors.white};
  box-shadow: ${({ shadow }) =>
    shadow ? " 0px 0px 8px 0px rgb(0 0 0 / 50%)" : null};
  color: ${colors.white};
  padding: 0 120px;
  position: fixed;
  z-index: 2;
  top: 0;
  transition: all 0.2s ease;

  ${media.mobile} {
    padding: 0 30px;
  }

  @media (min-width: 2000px) {
    padding: 0 22vw;
  }
`;

export const Logo = styled.a`
  color: ${colors.blue};
  font-size: 17px;
  cursor: pointer;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  ${media.mobile} {
    gap: 20px;
  }
`;

export const LanguageButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  > p {
    margin: 0;
    color: ${colors.lightGrayText};
    font-size: 18px;
    z-index: 2;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 45px;
`;
