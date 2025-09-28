import type { IconType } from "react-icons";

type LinkProps = {
    text: string;
    href: string;
    itemProp?: string;
    icon?: IconType;
}


const StyledLink = ({ text, href, itemProp, icon: Icon }: LinkProps) => {
    const styles = "no-underline text-[#003333] border-b-2 border-transparent hover:border-[#003333]";
    return (
        <a
            itemProp={itemProp}
            href={href}
            className={`${Icon ? "flex flex-row" : ""} ${styles}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {Icon && <Icon />}
            {text}
        </a>
    )
}
 

export default StyledLink;