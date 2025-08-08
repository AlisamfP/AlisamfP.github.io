import { TbBrandGithub, TbFolderHeart, TbExternalLink } from "react-icons/tb";
import { Button } from "@headlessui/react";

type button = {
  name: string;
  link: string;
  text: string;
};

type TopActionButtonProps = {
  button1: button;
  button2?: button;
  onNavigate?: (section: "about" | "projects" | "contact") => void;
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
      className={`flex gap-2 md:gap-4 md:py-2 ${
        !button2 ? "justify-end" : "justify-evenly sm:justify-between"
      }`}
    >
      {github && (
        <a
          href={github.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center text-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100"
        >
          <TbBrandGithub className="text-2xl md:text-3xl" />
          {github.text}
        </a>
      )}
      {/* {button1 && button2 && (<div className="inline-block min-h-[1em] w-px md:hidden self-stretch bg-[#003333]"></div>)} */}
      {portfolio && onNavigate && (
        <Button
          onClick={() => onNavigate("projects")}
          className={`flex flex-col cursor-pointer md:flex-row-reverse text-center items-center justify-end rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100`}
        >
          <TbFolderHeart className="text-2xl md:text-3xl" />
          {portfolio.text}
        </Button>
      )}
      {link && (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col sm:flex-row-reverse items-center text-center justify-end rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100`}
        >
          <TbExternalLink className="text-2xl md:text-3xl" />
          {link.text}
        </a>
      )}
    </div>
  );
};

export default TopActionButtons;
