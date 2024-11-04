//Objective: to set up a light and dark theme for our app

//here I am going to set up my context
//to set up context, we are going to use two hooks: useState and useContext
//context can provide any component (and pages) with props (state, data...)
//this is a client component because we are using hooks
"use client";

//import the set up elements for our context
import { createContext, useContext } from "react";
import { useState } from "react";

//set up the context with createContext
//in the brackets, we need the initial value of our context

const ThemeContext = createContext("light");

//next, I need to give my ThemeContext to the Provider, so all components have access to the ThemeContext
//a provider wraps the app to make it have access to a specific feature (for example, in Clerk, we wrap our children with the ClerkProvider, so our whole app has access to authentication)

export function ThemeProvider({ children }) {
  //we are going to declare the theme state
  const [theme, setTheme] = useState("light");

  return (
    //here we are going to return the context that we want to provide. We are returning it, so it is available outside of this function
    // in the value prop, we will write the elements that we want to provide to the rest of the app --> if the value prop is more than one element, we need to store them in an object
    //the value here is theme and setTheme, so we can mutate state
    //children represents all the components in our app
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//we are going to use useContext to allow any values declared in the provider to be used
//I am going to have a custom hook that combines context and provider
export function useTheme() {
  return useContext(ThemeContext);
}
