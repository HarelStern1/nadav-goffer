import { FC } from "react";

// components
import NavLinks from "../NavLinks/NavLinks";
import { Container, Logo, LogoWrapper, Wrapper } from "./Navbar.styled";
import { LanguageButton } from "./Navbar.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Link from "next/link";

// utils
import { useAppContext } from "../../context/AppContext/AppContext";
import { useNavContext } from "../../context/NavContext/NavContext";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar: FC = () => {
  const isMobile = useMediaQuery(767);
  const { language, changeLanguage } = useAppContext();
  const { setActive, shadow } = useNavContext();

  const handleLogo = () => {
    setActive(0);
  };

  return (
    <Wrapper shadow={shadow}>
      <LogoWrapper>
        <Link href="/">
          <Logo onClick={handleLogo}>
            {language === "he" ? "Nadav Goffer" : "נדב גופר"}
          </Logo>
        </Link>
      </LogoWrapper>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <Container>
          <NavLinks />
          <LanguageButton onClick={() => changeLanguage(language)}>
            <p>{language === "en" ? "English" : "עברית"}</p>
          </LanguageButton>
        </Container>
      )}
    </Wrapper>
  );
};

export default Navbar;
