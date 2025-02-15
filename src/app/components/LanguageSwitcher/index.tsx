import { useState } from "react";

type Props = {
  onLanguageChange: (lang: string) => void;
};

export default function LanguageSwitcher({ onLanguageChange }: Props) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fr" : "en";
    setLanguage(newLang);
    onLanguageChange(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="p-2 text-white rounded-md ">
      {language === "en" ? "EN | FR" : "FR | EN"}
    </button>
  );
}
