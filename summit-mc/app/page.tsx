import Image from "next/image";
import styles from "./page.module.css";

import type { Metadata } from "next";
import { Button, LinkButton, PatreonButton } from "@/components/button";

export const metadata: Metadata = {
  title: "SummitMC | Home",
};

export default function Home() {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <img
            alt="Minecraft Text"
            className="w-1/2 my-10"
            src="/img/Summit.png"
          />
        </div>
        <div id="flashingtext">Minecraft At Its Peak</div>
        <img
          alt="Minecraft"
          className="small_logo"
          style={{ visibility: "hidden" }}
          src="/img/space-half.png"
        />
        <div className="grid grid-cols-2 gap-4">
          <LinkButton href="/free" className="col-span-2">
            Free Area
          </LinkButton>
          <LinkButton href="/vault" className="col-span-2">
            Download Vault
          </LinkButton>
          <PatreonButton className="max-sm:col-span-2" />
          <Button className="max-sm:col-span-2">Quit</Button>
        </div>
      </section>
      <section className="image2">
        <h3>COMING SOON</h3>
      </section>
    </>
  );
}
