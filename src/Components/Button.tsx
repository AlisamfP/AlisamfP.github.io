import type { IconType } from "react-icons";

type ButtonProps = {
    text: string;
    href?: string;
    icon?: IconType;
    onClick?: () => void;
    rowReverse: boolean;
}


const Button = ({ text, href, icon: Icon, onClick, rowReverse }: ButtonProps) => {
    const buttonStyles = "flex flex-col items-center text-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100";

    if (href) return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonStyles} ${rowReverse ? "sm:flex-row-reverse" : "sm:flex-row"}`}
        >
            {Icon && (<Icon className="text-2xl md:text-3xl" />)}
            {text}
        </a >)

    return (
        <button
            onClick={onClick}
            className={`cursor-pointer ${rowReverse ? "sm:flex-row-reverse" : "sm:flex-row"} ${buttonStyles}`}
        >
            {Icon && (<Icon className="text-2xl md:text-3xl" />)}
            {text}
        </button>
    )
}
 

export default Button;