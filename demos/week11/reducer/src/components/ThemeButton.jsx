//this button will have the context available so we can change the theme from light to dark
//we need an event to handle the button click
//this is a client because we have an event
"use client";
//I need to import my custom hook which has my context available
import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  //my useTheme has access to the theme and setTheme values
  //we can destructure the values here
  const { dispatch } = useTheme();

  function handleLight() {
    //this handle click needs to change the theme to light
    dispatch({ type: "light" });
  }

  function handleDark() {
    //this handle click needs to change the theme to dark
    dispatch({ type: "dark" });
  }

  function handleColourblind() {
    //this handle click needs to change the theme to colourblind friendly
    dispatch({ type: "colourblind" });
  }

  function handleDyslexia() {
    //this handle click needs to change the theme to dyslexia friendly
    dispatch({ type: "dyslexia" });
  }

  return (
    <>
      <button
        onClick={handleLight}
        className="border-sky-400 border-4 hover:bg-amber-300 cursor-pointer"
      >
        Change the theme to light
      </button>
      <button
        onClick={handleDark}
        className="border-sky-400 border-4 hover:bg-amber-300 cursor-pointer"
      >
        Change the theme to dark
      </button>
      <button
        onClick={handleDyslexia}
        className="border-sky-400 border-4 hover:bg-amber-300 cursor-pointer"
      >
        Change the theme to dyslexia friendly
      </button>
      <button
        onClick={handleColourblind}
        className="border-sky-400 border-4 hover:bg-amber-300 cursor-pointer"
      >
        Change the theme to colourblind friendly
      </button>
    </>
  );
}
