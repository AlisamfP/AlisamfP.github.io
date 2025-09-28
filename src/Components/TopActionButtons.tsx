import { TbBrandGithub, TbFolderHeart, TbExternalLink } from "react-icons/tb";

import type { Section } from "../types/section-types";
import Button from "./Button";

type ButtonType = "github" | "portfolio" | "link";

interface ButtonConfig {
  type: ButtonType;
  link: string;
  text: string;
}

interface TopActionButtonProps {
  button1: ButtonConfig;
  button2?: ButtonConfig;
  onNavigate?: (section: Section) => void;
}

const BUTTON_ICONS = {
  github: TbBrandGithub,
  portfolio: TbFolderHeart,
  link: TbExternalLink
} as const;

const TopActionButtons = ({
  button1,
  button2,
  onNavigate,
}: TopActionButtonProps) => {
  const buttons = [button1, button2].filter((button): button is ButtonConfig => button != undefined);

  const renderButton = (buttonConfig: ButtonConfig, key: string, buttonIndex: number) => {
    const { type, link, text } = buttonConfig;
    const Icon = BUTTON_ICONS[type]

    // determine icon position based on button position
    // left button, icon on left
    // right button, icon on right
    // one button, on right, so icon on right
    const iconPosition = buttons.length === 1 ? "right" : buttonIndex === 0 ? "left" : "right";

    if (type === "portfolio" && onNavigate) {
      return (
        <Button
          key={key}
          variant="secondary"
          icon={Icon}
          iconPosition={iconPosition}
          size="lg"
          onClick={() => onNavigate("projects")}
          ariaLabel={`Navigate to ${text}`}
        >
          {text}
        </Button>
      )
    }
    if (type === "github" || type === "link") {
      return (
        <Button
          key={key}
          variant={type === "github" ? "primary" : "secondary"}
          href={link}
          icon={Icon}
          iconPosition={iconPosition}
          size="lg"
          target="_blank"
          ariaLabel={`Open ${text} in new tab`}
        >
          {text}
        </Button>
      )
    }
    return null;
  };

  if (buttons.length === 0) {
    console.log("NO BUTTONS")
    return null;
  }

  return (
    <div className={`flex gap-2 md:gap-4 md:py-2 ${buttons.length === 1 ? "justify-end" : "justify-between"}`}>
      {buttons.map((button, i) =>
        renderButton(button, `button-${i}-${button.type}`, i)
      )}
    </div>
  )

}


export default TopActionButtons;
