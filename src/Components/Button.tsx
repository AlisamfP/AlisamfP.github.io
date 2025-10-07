import React, { forwardRef } from "react";
import type { IconType } from "react-icons";

import "../styles/button.css";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "icon" | "link";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type BaseButtonProps = {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
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
        ...restProps
    } = props;


    // Build class names
    const getButtonClasses = () => {
        const baseClasses = "btn";
        const variantClasses = `btn-${variant}`;
        const sizeClasses = size !== "md" ? `btn-${size}` : "";
        const iconOnlyClasses = (!children && Icon) && variant != "icon" ? size==="sm" ? "btn-icon-sm" : "btn-icon" : "";


        return [
            baseClasses,
            variantClasses,
            sizeClasses,
            iconOnlyClasses,
            className,
        ]
            .filter(Boolean)
            .join(" ");
    };

    const renderIcon = () => {
        if (!Icon) return null;
        const iconSize = size === "sm" ? "30" : "42"
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
            // using flex order to show icon on top when on mobile and buttons are flex col instead of row
            return (
                <>
                    <span className="order-2 md:order-1">{children}</span>
                    <span className="order-1 md:order-2">
                        {renderIcon()}
                        </span>
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
            {...commonProps}
        >
            {renderContent()}
        </button>
    );


});

export default Button;
