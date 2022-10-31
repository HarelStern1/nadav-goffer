import { FC, useState } from "react";
import { useNavContext } from "../../context/NavContext/NavContext";

// components
import Link from "next/link";
import { Wrapper, StyledLink, Container } from "./MobileNavLinks.styled";
import { LanguageButton } from "../Navbar/Navbar.styled";

// utils
import { MobileNavLinksProps } from "./index";
import { links } from "../../context/NavContext/data";
import { useAppContext } from "../../context/AppContext/AppContext";

const MobileNavLinks: FC<MobileNavLinksProps> = ({ setOpen }) => {
  const { active, setActive } = useNavContext();
  const { language, changeLanguage } = useAppContext();

  const handleClick = (idx: number) => {
    setActive(idx);
    setOpen(false);
  };

  const handleLanguage = (lang: string) => {
    changeLanguage(lang);
    setOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        {links.map((link, idx) => {
          return (
            <StyledLink
              key={idx}
              active={active}
              onClick={() => handleClick(idx)}
              href={link.href}
            >
              {language === "he" ? link.en.title : link.he.title}
            </StyledLink>
          );
        })}
      </Container>
      <LanguageButton onClick={() => handleLanguage(language)}>
        <p>{language === "en" ? "English" : "עברית"}</p>
      </LanguageButton>
    </Wrapper>
  );
};

export default MobileNavLinks;
