import { FC } from "react";

// components
import { IconContainer, StyledLink, Wrapper } from "./Footer.styled";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

const Footer: FC = () => {
  return (
    <Wrapper>
      <div>
        <p>Copyright © 2022. All Rights Reserved</p>
      </div>
      <IconContainer>
        <StyledLink
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nadav-goffer-54865b39/"
        >
          <LinkedinIcon />
        </StyledLink>
        <StyledLink>
          <MailIcon />
        </StyledLink>
        <StyledLink href="tel:+972546493839">
          <PhoneIcon />
        </StyledLink>
      </IconContainer>
    </Wrapper>
  );
};

export default Footer;
