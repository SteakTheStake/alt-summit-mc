import Image from "next/image";
import styles from "./page.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SummitMC | Home",
};

export default function Home() {
  return (
    <>
      <section>
        <img
          alt="Minecraft Text"
          id="logo"
          className="small_logo"
          src="/img/Summit.png"
        />
        <div id="flashingtext">Minecraft At Its Peak</div>
        <img
          alt="Minecraft"
          className="small_logo"
          style={{ visibility: "hidden" }}
          src="/img/space-half.png"
        />
        <button className="button singleplayer soundButton" id="click1">
          Free Area
        </button>
        <br />
        <button className="button multiplayer soundButton" id="click2">
          Download Vault
        </button>
        <br />
        <button
          className="button button_small left soundButton patreonAuthBtnclassName"
          id="click7"
        >
          Connect With Patreon
        </button>
        <button className="button button_small right soundButton" id="click4">
          Quit
        </button>
      </section>
      <section className="image2">
        <h3>COMING SOON</h3>
      </section>
      <footer className="bottom-div">
        <div className="middle">
          <div className="nobtn">
            <p className="halfo">
              "Minecraft" is a trademark of Mojang. This site is not affiliated
              with Mojang or Microsoft.
            </p>
            <p>
              ©&nbsp;<span id="year"></span>&nbsp;Summit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="fullscreen-underlay">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </>
  );
}
