import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({subsets : ['latin']})

export const metadata = {
  title: "Devs&Logics",
  description: "Software Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
