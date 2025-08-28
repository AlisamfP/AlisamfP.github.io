import { TbBrandGithub, TbFolderHeart, TbExternalLink } from "react-icons/tb";

import type { Section } from "../types/section-types";
import Button from "./Button";

type button = {
  name: string;
  link: string;
  text: string;
};

type TopActionButtonProps = {
  button1: button;
  button2?: button;
  onNavigate?: (section: Section) => void;
};


const TopActionButtons = ({
  button1,
  button2,
  onNavigate,
}: TopActionButtonProps) => {
  const github =
    button1.name == "github"
      ? button1
      : button2?.name === "github"
        ? button2
        : null;
  const portfolio =
    button1.name == "portfolio"
      ? button1
      : button2?.name === "portfolio"
        ? button2
        : null;
  const link =
    button1.name == "link"
      ? button1
      : button2?.name === "link"
        ? button2
        : null;
  return (
    <div
      className={`flex gap-2 md:gap-4 md:py-2 ${!button2 ? "justify-end" : "justify-evenly sm:justify-between"
        }`}
    >
      {github && (
        <Button rowReverse={false} text={github.text} href={github.link} icon={TbBrandGithub} />

      )}
      {/* {button1 && button2 && (<div className="inline-block min-h-[1em] w-px md:hidden self-stretch bg-[#003333]"></div>)} */}
      {portfolio && onNavigate && (
        <Button rowReverse onClick={() => onNavigate("projects")} icon={TbFolderHeart} text={portfolio.text} />

      )}
      {link && (
        <Button rowReverse href={link.link} icon={TbExternalLink} text={link.text} />
      )}
    </div>
  );
};

export default TopActionButtons;
