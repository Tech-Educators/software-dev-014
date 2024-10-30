import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
const roboto = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Florapedia",
  description: "A compendium of flowers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
