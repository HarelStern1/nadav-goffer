import { FC } from "react";
import { BurgerProps } from ".";
import { StyledBurger } from "./Burger.styled";

const Burger: FC<BurgerProps> = ({ open, toggle }) => {
  return (
    <StyledBurger open={open} onClick={toggle}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
