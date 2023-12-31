"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        "button w-full md:text-2xl text-sm sm:text-lg sound-button",
        className,
      )}
    >
      {children}
    </button>
  );
};

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
      className={twMerge(
        "button w-full md:text-2xl text-lg  sound-button",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export const PatreonButton = ({ className }: { className?: string }) => {
  const { data: session } = useSession();

  // Perform the redirect in a useEffect hook
  useEffect(() => {
    if (session) {
      redirect("/vault");
    }
  }, [session]); // Dependency array: the effect will run when 'session' changes

  return (
      <Button
          onClick={async () => await signIn("patreon")}
          aria-label="Continue with Patreon"
          className={className}
      >
        Continue With Patreon
      </Button>
  );
};
