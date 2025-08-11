// steven-ou/honey_art_academy/Honey_Art_Academy-3b08cfc3f42b337480a330f9b0097aaca9ef5160/honey-academy/components/DecorationPanel.js

"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const backgroundPatterns = [
  "none",
  "https://www.transparenttextures.com/patterns/asfalt-light.png",
  "https://www.transparenttextures.com/patterns/brushed-alum.png",
  "https://www.transparenttextures.com/patterns/concrete-wall.png",
  "https://www.transparenttextures.com/patterns/diagonal-striped-brick.png",
  "https://www.transparenttextures.com/patterns/fabric-of-squares.png",
  "https://www.transparenttextures.com/patterns/graphy.png",
  "https://www.transparenttextures.com/patterns/lined-paper.png",
  "https://www.transparenttextures.com/patterns/pinstripe.png",
  "https://www.transparenttextures.com/patterns/wood-pattern.png",
];

export default function DecorationPanel({ isOpen, onClose }) {
  const [background, setBackground] = useState(backgroundPatterns[0]);

  useEffect(() => {
    const savedBg = localStorage.getItem("background");
    if (savedBg) {
      setBackground(savedBg);
      applyBackground(savedBg);
    }
  }, []);

  const applyBackground = (bg) => {
    document.documentElement.style.setProperty(
      "--background-image",
      bg === "none" ? "none" : `url(${bg})`
    );
  };

  const handleBackgroundChange = (bg) => {
    setBackground(bg);
    localStorage.setItem("background", bg);
    applyBackground(bg);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-0 h-auto bg-white shadow-lg p-6 rounded-l-lg z-50 max-w-xs w-full animate-slide-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Customize Background</h3>
        <button
          onClick={onClose}
          className="text-2xl text-gray-500 hover:text-primary"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Background Pattern</h4>
        <div className="flex flex-wrap gap-2">
          {backgroundPatterns.map((bg) => (
            <button
              key={bg}
              onClick={() => handleBackgroundChange(bg)}
              className={`w-10 h-10 rounded-md border-2 transition-all ${
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
