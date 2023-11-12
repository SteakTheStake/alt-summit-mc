import Image from "next/image";
import styles from "./page.module.css";

import type { Metadata } from "next";
import { Button, LinkButton, PatreonButton } from "@/components/button";
import {className} from "postcss-selector-parser";

export const metadata: Metadata = {
    title: "SummitMC | Free",
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
        <button
    data-sound="click.ogg"
    className="patreonbutton singleplayer soundButton"
    id="click8"
        >
        Become a Patron
    </button>
    <audio style={{ visibility: "hidden" }}>
    <source src="/public/sounds/click.ogg" type="audio/ogg" />
        </audio>
        </section>
        </>

);
}
