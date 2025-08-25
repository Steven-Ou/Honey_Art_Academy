"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  
}
