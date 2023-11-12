import Image from "next/image";
import styles from "./page.module.css";

import type { Metadata } from "next";
import { Button, LinkButton, HomeBtn } from "@/components/homebtn";
import { className } from "postcss-selector-parser";
import React from "react";

export const metadata: Metadata = {
    title: "SummitMC | Vault",
};

export default function Free() {
    return (
        <>
            <section>
                <img className="img2" src="/public/img/Summit-Logo.svg" alt="logo" />
            </section>
            <section>
                <h1 className="titletxt">Welcome to Summit</h1>
                <p className="subtitletxt">We're so glad you're here!</p>
                <audio style={{ visibility: "hidden" }}>
                    <source src="/public/sounds/click.ogg" type="audio/ogg" />
                </audio>
                <HomeBtn data-sound="click.ogg" className="homeBtn singleplayer soundButton"/>
                <audio style={{ visibility: "hidden" }}>
                    <source src="/public/sounds/click.ogg" type="audio/ogg" />
                </audio>
            </section>
        </>

    );
}
