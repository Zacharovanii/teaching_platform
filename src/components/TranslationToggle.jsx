import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function TranslationToggle() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  }, [language, i18n]);

  const toggleTranslation = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    setLanguage(newLanguage);
  };

  return (
    <button
      className="
		fixed bottom-3 left-3
		border border-black rounded-full dark:border-transparent
		text-sm text-black dark:text-white"
      onClick={toggleTranslation}
    >
      {language}
    </button>
  );
}

export default TranslationToggle;
