import { FC } from "react";
import { useNavContext } from "../../context/NavContext/NavContext";

// components
import { Wrapper, StyledLink } from "./NavLinks.styled";
import Link from "next/link";

// utils
import { links } from "../../context/NavContext/data";
import { useAppContext } from "../../context/AppContext/AppContext";

const NavLinks: FC = () => {
  const { active, setActive } = useNavContext();
  const { language } = useAppContext();

  const handleClick = (idx: number) => {
    setActive(idx);
  };

  return (
    <Wrapper language={language}>
      {links.map((link, idx) => {
        return (
          <Link key={idx} href={link.href}>
            <StyledLink
              active={active}
              onClick={() => handleClick(idx)}
              href={link.href}
            >
              {language === "he" ? link.en.title : link.he.title}
            </StyledLink>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;
