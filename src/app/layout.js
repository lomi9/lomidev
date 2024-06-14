import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../../src/contexts/ThemeContext";
import NeatBackground from "@/components/NeatBackground";
import { Kanit, Syne, Roboto_Condensed } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Lomi dev",
  description: "Développeuse web - Création de site web",
};

const roboto = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="fr" className={`${syne.className}`}>
        <body className="">
          <div className="animated-background z-5 w-full h-screen fixed top-0 left-0 overflow-hidden">
            <NeatBackground />
          </div>
          <div className="page-container relative w-full bg-gradient-to-b from-transparent to-transparent z-10">
            <div className="header-container w-full z-[100] relative">
              <Navbar />
            </div>
            <main className="main-content w-full scroll-container flex justify-center flex-wrap">
              {children}
            </main>
            <div className="footer-container w-full">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
