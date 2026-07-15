import type { Metadata } from "next";
import { Raleway, Poppins, Caveat } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./globals.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Handwritten display face — used for large, playful moments only.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alisa Palson — Front-end Developer",
    template: "%s · Alisa Palson",
  },
  description:
    "Portfolio of Alisa Palson, a front-end developer focused on accessible, thoughtful web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${raleway.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <body>
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="shell">
            <Header />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
