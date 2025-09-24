import type { IconType } from "react-icons";

type LinkProps = {
    text: string;
    href: string;
    itemProp?: string;
    icon?: IconType;
}


const StyledLink = ({ text, href, itemProp, icon: Icon }: LinkProps) => {
    const styles = "text-dark-cyan hover:underline";
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