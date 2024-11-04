//this button will have the context available so we can change the theme from light to dark
//we need an event to handle the button click
//this is a client because we have an event
"use client";
//I need to import my custom hook which has my context available
import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  //my useTheme has access to the theme and setTheme values
  //we can destructure the values here
  const { theme, setTheme } = useTheme();
  function handleClick() {
    //this handle click needs to change the theme from light to dark
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <h1 className={theme}>Test the theme!</h1>
      <button
        onClick={handleClick}
        className="border-sky-400 border-4 hover:bg-amber-300 cursor-pointer"
      >
        Change the theme
      </button>
    </>
  );
}
