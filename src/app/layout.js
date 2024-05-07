import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../../src/contexts/ThemeContext";
import NeatBackground from "@/components/NeatBackground";
import { Kanit, Syne } from "next/font/google";

export const metadata = {
  title: "LoMi Dev",
  description: "Dévelloppeuse web - Création de site web",
};

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="fr" className={syne.className}>
        <body>
          <div className="z-5 w-full h-screen fixed top-0 left-0 overflow-hidden">
            <NeatBackground />
          </div>
          <div className="relative w-full bg-gradient-to-b from-transparent to-transparent z-10">
            <div className="w-full pt-4 z-[100] relative">
              <Navbar />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
