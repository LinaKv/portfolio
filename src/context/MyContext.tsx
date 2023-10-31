import React, { createContext, useState, useContext, ReactNode } from "react";

interface MyContextProps {
  language: boolean;
  updateLanguage: (newValue: boolean) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setValue] = useState<boolean>(true);

  const updateLanguage = (newValue: boolean) => {
    setValue(newValue);
  };

  return (
    <MyContext.Provider value={{ language, updateLanguage }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };
