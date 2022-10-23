import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import { NavContextType } from "./index";
import { routeToIndexMap } from "./data";

export const NavContext = React.createContext<NavContextType | null>(null);

const NavProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [shadow, setShadow] = useState<boolean>(false);
  const router = useRouter();
  const [active, setActive] = useState<number>(
    routeToIndexMap[router.pathname]
  );

  // when will shadow on navbar will be displayed
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.pageYOffset <= 0) {
        setShadow(false);
      } else if (prevScrollpos > currentScrollPos) {
        setShadow(true);
      } else {
        setShadow(true);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const value = { active, setActive, shadow };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNavContext = () => {
  const context = React.useContext(NavContext);
  if (context === null) {
    throw new Error("useNavContext must be used within a NavContext");
  }
  return context;
};

export default NavProvider;
