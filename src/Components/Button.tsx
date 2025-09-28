import { forwardRef } from "react";
import type { IconType } from "react-icons";

type ButtonVariant = "default" | "icon" | "link";

type BaseButtonProps = {
    text: string;
    variant?: ButtonVariant;
    className?: string;
    icon?: IconType;
    iconSize?: string;
    rowReverse?: boolean;
};

interface DefaultButtonProps extends BaseButtonProps {
    variant?: 'default';
    onClick: () => void;
    ariaLabel?: string;
}

interface IconButtonProps extends BaseButtonProps {
    variant: "icon";
    onClick: () => void;
    ariaLabel: string;
}

interface LinkButtonProps extends BaseButtonProps {
    variant: "link";
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    ariaLabel?: string;
}

type ButtonProps = DefaultButtonProps | IconButtonProps | LinkButtonProps;

const BUTTON_STYLES = {
    base: "flex items-center text-center rounded gap-1 md:gap-2 text-stone-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    default: "flex-col p-2 hover:bg-[#006666] hover:text-stone-100",
    icon: "hover:bg-[#00333350] rounded-2xl p-0.5",
    link: "flex-col p-2 hover:bg-[#006666] hover:text-stone-100",
} as const;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (props, ref) => {
    const{
        text, variant="default", className="", icon: Icon, iconSize="text-2xl md:text-3xl", rowReverse=false, ...restProps
    } = props;

    const getButtonClasses = () => {
        const baseClasses = `${BUTTON_STYLES.base} ${BUTTON_STYLES[variant]}`;
        const directionClass = variant === "icon" && !rowReverse ? "sm:flex-row" : variant === "icon" && rowReverse ? "sm:flex-row-reverse" : "";

        return `${baseClasses} ${directionClass} ${className}`.trim();
    };

    const renderIcon = () => Icon && <Icon className={iconSize} aria-hidden="true" />

    switch(variant) {
        case "icon": {
            const iconProps = restProps as Omit<IconButtonProps, keyof BaseButtonProps>;
            return (
                <button
                    ref={ref as React.Ref<HTMLButtonElement>}
                    type="button"
                    onClick={iconProps.onClick}
                    aria-label={iconProps.ariaLabel}
                    className={getButtonClasses()}
                >
                    {renderIcon()}
                    <span className="sr-only">{text}</span>
                </button>
            )
        }
        case "link": {
            const linkProps = restProps as Omit<LinkButtonProps, keyof BaseButtonProps>;
            return (
                <a 
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={linkProps.href}
                    target={linkProps.target || "_blank"}
                    rel={linkProps.target === "_blank" ? "noopener noreferrer" : undefined}
                    aria-label={linkProps.ariaLabel}
                    className={getButtonClasses()}
                >
                    {renderIcon()}
                    <span>{text}</span>
                </a>
            )
        }
        case "default":
        default: {
            const buttonProps = restProps as Omit<DefaultButtonProps, keyof BaseButtonProps>;
            return (
                <button
                    ref={ref as React.Ref<HTMLButtonElement>}
                    type="button"
                    onClick={buttonProps.onClick}
                    aria-label={buttonProps.ariaLabel}
                    className={`${getButtonClasses()} cursor-pointer`}
                >
                    {renderIcon()}
                    <span>{text}</span>
                </button>
            )
        }
    }
})



// const Button = ({
//     text,
//     type,
//     styles,
//     href,
//     ariaLabel,
//     icon: Icon,
//     iconSize = "text-2xl md:text-3xl",
//     onClick,
//     rowReverse = false,
// }: ButtonProps) => {
//     const buttonStyles = styles
//         ? styles
//         : "flex flex-col items-center text-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100";

//     if (type === "icon")
//         return (
//             // aria label is set to text prop for icon only buttons
//             <button
//                 onClick={onClick}
//                 aria-label={ariaLabel}
//                 className={`${buttonStyles} hover:bg-[#00333350] rounded-2xl p-0.5`}
//             >
//                 {Icon && <Icon className={iconSize} />}
//             </button>
//         );

//     if (href)
//         return (
//             <a
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${buttonStyles} ${rowReverse ? "sm:flex-row-reverse" : "sm:flex-row"
//                     }`}
//             >
//                 {Icon && <Icon className={iconSize} />}
//                 {text}
//             </a>
//         );

//     return (
//         <button
//             onClick={onClick}
//             className={`cursor-pointer ${rowReverse ? "sm:flex-row-reverse" : "sm:flex-row"
//                 } ${buttonStyles}`}
//         >
//             {Icon && <Icon className={iconSize} />}
//             {text}
//         </button>
//     );
// };

export default Button;
