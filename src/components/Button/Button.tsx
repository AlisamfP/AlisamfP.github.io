import Link from "next/link";
import type { IconType } from "react-icons";
import styles from "./Button.module.scss";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconType;
  iconPosition?: "left" | "right";
  /** If set, renders an anchor/link instead of a button */
  href?: string;
  /** External links open in a new tab with safe rel */
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  /** Required when there is no visible text (icon-only) */
  "aria-label"?: string;
  children?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  href,
  external = false,
  onClick,
  type = "button",
  className,
  children,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const iconOnly = !children && !!Icon;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    iconOnly && styles.iconOnly,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={styles.icon} aria-hidden />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className={styles.icon} aria-hidden />
      )}
    </>
  );

  if (href) {
    const isProtocolLink = /^(mailto:|tel:)/.test(href);
    if (external || isProtocolLink) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
