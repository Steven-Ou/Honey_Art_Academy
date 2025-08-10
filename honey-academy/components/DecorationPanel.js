"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const themes = [
  {
    name: "Amber",
    primary: "#F59E0B",
    "primary-dark": "#D97706",
    "primary-light": "#FEF3C7",
    bg: "#FFFBEB",
  },
  {
    name: "Rose",
    primary: "#F43F5E",
    "primary-dark": "#E11D48",
    "primary-light": "#FFE4E6",
    bg: "#FFF1F2",
  },
  {
    name: "Teal",
    primary: "#14B8A6",
    "primary-dark": "#0D9488",
    "primary-light": "#F0FDFA",
    bg: "#CCFBF1",
  },
  {
    name: "Indigo",
    primary: "#6366F1",
    "primary-dark": "#4F46E5",
    "primary-light": "#EEF2FF",
    bg: "#E0E7FF",
  },
];

const backgroundPatterns = [
  "none",
  "https://www.transparenttextures.com/patterns/asfalt-light.png",
  "https://www.transparenttextures.com/patterns/brushed-alum.png",
  "https://www.transparenttextures.com/patterns/concrete-wall.png",
  "https://www.transparenttextures.com/patterns/diagonal-striped-brick.png",
];

export default function DecorationPanel({ isOpen, onClose }) {
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgroundPatterns[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedBg = localStorage.getItem("background");
    if (savedTheme) {
      const parsedTheme = JSON.parse(savedTheme);
      setActiveTheme(parsedTheme);
      applyTheme(parsedTheme);
    }
    if (savedBg) {
      setBackground(savedBg);
      applyBackground(savedBg);
    }
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-dark", theme["primary-dark"]);
    root.style.setProperty("--color-primary-light", theme["primary-light"]);
    root.style.setProperty("--color-bg-base", theme.bg);
  };

  const applyBackground = (bg) => {
    document.documentElement.style.setProperty(
      "--background-image",
      bg === "none" ? "none" : `url(${bg})`
    );
  };

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
    applyTheme(theme);
  };

  const handleBackgroundChange = (bg) => {
    setBackground(bg);
    localStorage.setItem("background", bg);
    applyBackground(bg);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-0 h-auto bg-white shadow-lg p-6 rounded-l-lg z-50 max-w-xs w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Decorate Page</h3>
        <button onClick={onClose} className="text-2xl">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Theme Color</h4>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleThemeChange(theme)}
              className={`w-10 h-10 rounded-full border-2 ${
                activeTheme.name === theme.name
                  ? "border-primary-dark ring-2 ring-primary"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: theme.primary }}
              aria-label={`Select ${theme.name} theme`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Background Pattern</h4>
        <div className="flex flex-wrap gap-2">
          {backgroundPatterns.map((bg) => (
            <button
              key={bg}
              onClick={() => handleBackgroundChange(bg)}
              className={`w-10 h-10 rounded-md border-2 ${
                background === bg
                  ? "border-primary-dark ring-2 ring-primary"
                  : "border-gray-200"
              }`}
              style={{
                backgroundImage: bg === "none" ? "none" : `url(${bg})`,
                backgroundColor: "#f0f0f0",
              }}
              aria-label={`Select background ${
                bg === "none" ? "none" : bg.split("/").pop().split(".")[0]
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
