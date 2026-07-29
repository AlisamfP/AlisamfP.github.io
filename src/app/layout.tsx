import type { Metadata } from "next";
import { Ubuntu_Mono, Poppins, Newsreader } from "next/font/google";
import { Providers } from "./providers";
import { MenuBar } from "@/components/MenuBar/MenuBar";
import { Dock } from "@/components/Dock/Dock";
import { WindowManagerProvider } from "@/components/Desktop/window-manager";
import { BackgroundProvider } from "@/components/Desktop/background-provider";
import { ACCENT_STORAGE_KEY } from "./accent-provider";
import "./globals.scss";

// Sets the accent attribute before first paint, mirroring next-themes' own
// no-flash script (which handles the light/dark `data-mode` attribute).
const noFlashAccentScript = `(function(){try{var a=localStorage.getItem(${JSON.stringify(
  ACCENT_STORAGE_KEY,
)});if(a)document.documentElement.setAttribute('data-accent',a);}catch(e){}})();`;

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-ubuntu-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
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
      className={`${ubuntuMono.variable} ${poppins.variable} ${newsreader.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: noFlashAccentScript }} />
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <WindowManagerProvider>
            <BackgroundProvider>
              <MenuBar />
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
              <Dock/>
            </BackgroundProvider>
          </WindowManagerProvider>
        </Providers>
      </body>
    </html>
  );
}
