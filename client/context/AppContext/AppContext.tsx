import React, { FC, useState } from "react";
import { AppContextType, Language } from "./index";

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const changeLanguage = (current: string) => {
    if (current === "en") {
      setLanguage("he");
    } else {
      setLanguage("en");
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within a AppContext");
  }
  return context;
};

export default AppProvider;
