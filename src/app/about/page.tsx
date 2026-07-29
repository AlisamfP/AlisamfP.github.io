import type { Metadata } from "next";
import { Desktop } from "@/components/Desktop/Desktop";

export const metadata: Metadata = {
  title: "About",
};

// Same desktop shell as `/` — landing here just pre-opens the About
// (portfolio) window (see useAppLauncher), rather than being a distinct page.
export default function AboutPage() {
  return <Desktop />;
}
