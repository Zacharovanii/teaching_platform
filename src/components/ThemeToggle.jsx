import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") || true
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
			fixed bottom-3 left-10
			text-sm dark:text-white
			"
    >
      {isDarkMode ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggle;
