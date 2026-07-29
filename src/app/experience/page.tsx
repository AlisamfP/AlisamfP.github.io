import type { Metadata } from "next";
import { Desktop } from "@/components/Desktop/Desktop";

export const metadata: Metadata = {
  title: "Experience",
};

// Same desktop shell as `/` — landing here just pre-opens the Experience
// window (see useAppLauncher), rather than being a distinct page.
export default function ExperiencePage() {
  return <Desktop />;
}
