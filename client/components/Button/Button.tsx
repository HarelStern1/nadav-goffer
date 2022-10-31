import Link from "next/link";
import { FC } from "react";
import { ButtonProps } from ".";
import { StyledButton } from "./Button.styled";

const Button: FC<ButtonProps> = ({
  children,
  stroke,
  responsive,
  href,
  language,
}) => {
  return (
    <a href={href}>
      <StyledButton responsive={responsive} stroke={stroke} language={language}>
        {children}
      </StyledButton>
    </a>
  );
};

export default Button;
