import type { Metadata } from "next";
import { Desktop } from "@/components/Desktop/Desktop";

export const metadata: Metadata = {
  title: "Works",
};

// Same desktop shell as `/` — landing here just pre-opens the Works window
// (see useAppLauncher), rather than being a distinct page.
export default function WorksPage() {
  return <Desktop />;
}
