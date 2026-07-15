"use client";

import { TbVolume } from "react-icons/tb";
import { Button } from "@/components/Button/Button";

export function PronounceButton() {
  const handleClick = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance("Uh Lisa");
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      icon={TbVolume}
      aria-label="Hear how to pronounce Alisa"
      onClick={handleClick}
    />
  );
}
