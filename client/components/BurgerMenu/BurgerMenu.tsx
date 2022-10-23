import { FC, useEffect, useState } from "react";
import { useNavContext } from "../../context/NavContext/NavContext";

// components
import MobileNavLinks from "../MobileNavLinks/MobileNavLinks";
import Burger from "./Burger/Burger";

const BurgerMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { active } = useNavContext();

  useEffect(() => {
    if (active === 0) {
      setOpen(false);
    }
  }, [active]);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Burger open={open} toggle={toggle} />
      {open && <MobileNavLinks setOpen={setOpen} />}
    </>
  );
};

export default BurgerMenu;
