import type { Metadata } from "next";
import { Raleway, Poppins, Caveat } from "next/font/google";
import { Providers } from "./providers";
import { MenuBar } from "@/components/MenuBar/MenuBar";
import { ACCENT_STORAGE_KEY } from "./accent-provider";
import "./globals.scss";

// Sets the accent attribute before first paint, mirroring next-themes' own
// no-flash script (which handles the light/dark `data-mode` attribute).
const noFlashAccentScript = `(function(){try{var a=localStorage.getItem(${JSON.stringify(
  ACCENT_STORAGE_KEY,
)});if(a)document.documentElement.setAttribute('data-accent',a);}catch(e){}})();`;

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
        <script dangerouslySetInnerHTML={{ __html: noFlashAccentScript }} />
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <MenuBar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
