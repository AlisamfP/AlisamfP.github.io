import React, { forwardRef } from "react";
import type { IconType } from "react-icons";

import "./button.css";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "icon" | "link";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type BaseButtonProps = {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
};

interface ButtonProps extends BaseButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    ariaLabel?: string;
}

interface LinkButtonProps extends BaseButtonProps {
    href: string;
    ariaLabel?: string;
    rel?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

type AllButtonProps = ButtonProps | LinkButtonProps;

const isLinkButton = (props: AllButtonProps): props is LinkButtonProps => {
    return "href" in props;
};

const Button = forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    AllButtonProps
>((props, ref) => {
    const {
        children,
        variant = "primary",
        className = "",
        size = "md",
        icon: Icon,
        iconPosition = "left",
        loading = false,
        disabled = false,
        fullWidth = false,
        ...restProps
    } = props;

    console.log(props)

    // Build class names
    const getButtonClasses = () => {
        const baseClasses = "btn";
        const variantClasses = `btn-${variant}`;
        const sizeClasses = size !== "md" ? `btn-${size}` : "";
        const iconOnlyClasses = !children && Icon ? "btn-icon" : "";
        const fullWidthClasses = fullWidth ? "w-full" : "";
        const loadingClasses = loading ? "btn-loading" : "";

        return [
            baseClasses,
            variantClasses,
            sizeClasses,
            iconOnlyClasses,
            fullWidthClasses,
            loadingClasses,
            className,
        ]
            .filter(Boolean)
            .join(" ");
    };

    const renderIcon = () => {
        if (!Icon) return null;

        const iconSize =
            size === "sm" ? "16" :
            size === "md" ? "24" : 
            size === "lg" ? "32" :
            "48";
            console.log(iconSize)
        return <Icon size={iconSize} aria-hidden="true" />;
    };

    const renderContent = () => {
        // icon only button
        if (!children && Icon) {
            return (
                <>
                    {renderIcon()}
                    <span className="sr-only">{restProps.ariaLabel || "Button"}</span>
                </>
            );
        }
        if (iconPosition === "right") {
            return (
                <>
                    <span>{children}</span>
                    {renderIcon()}
                </>
            );
        }
        return (
            <>
                {renderIcon()}
                <span>{children}</span>
            </>
        );
    };

    const commonProps = {
        className: getButtonClasses(),
        "aria-label": restProps.ariaLabel,
        "aria-disabled": disabled || loading,
    };

    if (isLinkButton(props)) {
        const linkProps = restProps as Omit<LinkButtonProps, keyof BaseButtonProps>;
        return (
            <a
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={linkProps.href}
                target={linkProps.target}
                rel={
                    linkProps.rel ||
                    (linkProps.target === "_blank" ? "noopener noreferrer" : undefined)
                }
                {...commonProps}
            >
                {renderContent()}
            </a>
        );
    }

    const buttonProps = restProps as Omit<ButtonProps, keyof BaseButtonProps>;
    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            type={buttonProps.type || "button"}
            onClick={buttonProps.onClick}
            disabled={disabled || loading}
            {...commonProps}
        >
            {renderContent()}
        </button>
    );

    // switch (variant) {
    //     case "icon": {
    //         const iconProps = restProps as Omit<
    //             IconButtonProps,
    //             keyof BaseButtonProps
    //         >;
    //         return (
    //             <button
    //                 ref={ref as React.Ref<HTMLButtonElement>}
    //                 type="button"
    //                 onClick={iconProps.onClick}
    //                 aria-label={iconProps.ariaLabel}
    //                 className={getButtonClasses()}
    //             >
    //                 {renderIcon()}
    //                 <span className="sr-only">{text}</span>
    //             </button>
    //         );
    //     }
    //     case "link": {
    //         const linkProps = restProps as Omit<
    //             LinkButtonProps,
    //             keyof BaseButtonProps
    //         >;
    //         return (
    //             <a
    //                 ref={ref as React.Ref<HTMLAnchorElement>}
    //                 href={linkProps.href}
    //                 target={linkProps.target || "_blank"}
    //                 rel={
    //                     linkProps.target === "_blank" ? "noopener noreferrer" : undefined
    //                 }
    //                 aria-label={linkProps.ariaLabel}
    //                 className={getButtonClasses()}
    //             >
    //                 {renderIcon()}
    //                 <span>{text}</span>
    //             </a>
    //         );
    //     }
    //     case "default":
    //     default: {
    //         const buttonProps = restProps as Omit<
    //             DefaultButtonProps,
    //             keyof BaseButtonProps
    //         >;
    //         return (
    //             <button
    //                 ref={ref as React.Ref<HTMLButtonElement>}
    //                 type="button"
    //                 onClick={buttonProps.onClick}
    //                 aria-label={buttonProps.ariaLabel}
    //                 className={`${getButtonClasses()} cursor-pointer`}
    //             >
    //                 {renderIcon()}
    //                 <span>{text}</span>
    //             </button>
    //         );
    //     }
    // }
});

export default Button;
