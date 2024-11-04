//here I am going to compile all my providers for easy access
//we will use our providers here anywhere else in our app
//you can have as many providers as you need in here

//I need to be in the client here because my ThemeProvider function uses useState
//once we are using the actual context (theme, setTheme), we don't have to be in a client component necessarily
"use client";
import { ThemeProvider } from "./context/ThemeContext";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
