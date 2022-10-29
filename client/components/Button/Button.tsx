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
    <Link href={href}>
      <StyledButton responsive={responsive} stroke={stroke} language={language}>
        {children}
      </StyledButton>
    </Link>
  );
};

export default Button;
