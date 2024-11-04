"use client";

import ThemeButton from "@/components/ThemeButton";
//import my custom hook with context inside
import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  //destructure the theme in context
  const { state } = useTheme();
  return (
    //use the theme
    <div className={state.theme}>
      <h1>Home page</h1>
      <ThemeButton />
    </div>
  );
}
