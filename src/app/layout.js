import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../../src/contexts/ThemeContext";
import NeatBackground from "@/components/NeatBackground";
import { Kanit, Syne } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Lomi dev",
  description: "Développeuse web - Création de site web",
};

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
      <html lang="fr" className={`${syne.className} ${kanit.className}`}>
        <body className="">
          <div className="z-5 w-full h-screen fixed top-0 left-0 overflow-hidden">
            <NeatBackground />
          </div>
          <div className="relative w-full bg-gradient-to-b from-transparent to-transparent z-10">
            <div className="w-full z-[100] relative">
              <Navbar />
            </div>
            <div className="w-full scroll-container">{children}</div>
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
