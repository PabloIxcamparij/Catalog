import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("heroui-theme") || "light");

  useEffect(() => {
    
    const updateTheme = () => {
      setTheme(localStorage.getItem("heroui-theme") || "light");
    };

    const interval = setInterval(updateTheme, 500);

    window.addEventListener("storage", updateTheme);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      clearInterval(interval); // Limpiar intervalo
      window.removeEventListener("storage", updateTheme); // Remover evento
      observer.disconnect(); // Desconectar observer
    };
  }, []);

  return theme;
}
