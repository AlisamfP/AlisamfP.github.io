import type { Metadata } from "next";
import { Desktop } from "@/components/Desktop/Desktop";

export const metadata: Metadata = {
  title: "Settings",
};

// Same desktop shell as `/` — landing here just pre-opens the Settings
// window (see useAppLauncher), rather than being a distinct page.
export default function SettingsPage() {
  return <Desktop />;
}
