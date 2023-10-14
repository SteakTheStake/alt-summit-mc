"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={twMerge("button soundButton", className)}>
      {children}
    </button>
  );
};

interface LinkButtonProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={twMerge("button soundButton", className)}
    >
      {children}
    </Link>
  );
};
