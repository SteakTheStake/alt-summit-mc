"use client";

import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const playSound = () => {
      const sound = new Audio("/sounds/click.ogg");
      console.log("hi");
      sound.play();
    };

    const buttons = document.querySelectorAll(".sound-button");

    if (buttons) {
      buttons.forEach((button) => button.addEventListener("click", playSound));
    }

    return () => {
      if (buttons) {
        buttons.forEach((button) =>
          button.removeEventListener("click", playSound),
        );
      }
    };
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
