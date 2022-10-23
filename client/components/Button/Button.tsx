import Link from "next/link";
import { FC } from "react";
import { ButtonProps } from ".";
import { StyledButton } from "./Button.styled";

const Button: FC<ButtonProps> = ({ children, stroke, responsive, href }) => {
  return (
    <Link href={href}>
      <StyledButton responsive={responsive} stroke={stroke}>
        {children}
      </StyledButton>
    </Link>
  );
};

export default Button;
