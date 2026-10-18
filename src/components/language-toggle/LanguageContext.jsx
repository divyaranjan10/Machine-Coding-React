import { createContext, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("javascript");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
