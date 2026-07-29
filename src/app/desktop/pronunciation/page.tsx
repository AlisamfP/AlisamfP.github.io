import type { Metadata } from "next";
import { Desktop } from "@/components/Desktop/Desktop";

export const metadata: Metadata = {
  title: "name.wav",
};

// Same desktop shell as `/` — landing here just pre-opens the name.wav
// window (see useAppLauncher), rather than being a distinct page.
export default function DesktopPronunciationPage() {
  return <Desktop />;
}
