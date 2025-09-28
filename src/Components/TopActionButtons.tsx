import { TbBrandGithub, TbFolderHeart, TbExternalLink } from "react-icons/tb";

import type { Section } from "../types/section-types";
import Button from "./Button";

import "./TopActionButtons.css"

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

  const renderButton = (buttonConfig: ButtonConfig, key: string) => {
    const { type, link, text } = buttonConfig;
    const Icon = BUTTON_ICONS[type]
    if (type === "portfolio" && onNavigate) {
      return (
        <Button
          key={key}
          variant="default"
          text={text}
          icon={Icon}
          onClick={() => onNavigate("projects")}
          ariaLabel={`Navigate to ${text}`}
        />
      )
    }
    if (type === "github" || type === "link") {
      return (
        <Button
          key={key}
          variant="link"
          text={text}
          href={link}
          icon={Icon}
          target="_blank"
          ariaLabel={`Open ${text} in new tab`}
        />
      )
    }
    return null;
  };

  if (buttons.length === 0) {
    console.log("NO BUTTONS")
    return null;
  }

  return (
    <div className="top-action-buttons">
      {buttons.map((button, index) =>
        renderButton(button, `button-${index}-${button.type}`)
      )}
    </div>
  )

}


export default TopActionButtons;
