import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  function toggleLanguage() {
    setLanguage(language === "javascript" ? "python" : "javascript");
  }

  return (
    <div>
      <h1>Current language: {language}</h1>
      <button
        className="bg-amber-500 text-black p-2 border"
        onClick={toggleLanguage}
      >
        Switch to {language === "javascript" ? "Python" : "JavaScript"}
      </button>
    </div>
  );
};

export default LanguageToggle;
