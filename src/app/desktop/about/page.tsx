import type { Metadata } from "next";
import { Desktop } from "@/components/Desktop/Desktop";

export const metadata: Metadata = {
  title: "aboutme.txt",
};

// Same desktop shell as `/` — landing here just pre-opens the aboutme.txt
// window (see useAppLauncher), rather than being a distinct page.
export default function DesktopAboutPage() {
  return <Desktop />;
}
