import { Inter } from "next/font/google";
import "./globals.css";
// import my Providers function to wrap all my elements in the layout
import { Providers } from "@/Providers";
//if we only have one provider, you could import it here directly and avoid having a Providers.jsx file
// import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Context",
  description: "Provide me with some context",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
