import React, { useState } from "react";
import CamLosoPFP from "../assets/CamLosoPFP.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Logo from "../assets/CamLosoLogo.webp";
import lsblack from "../assets/lsblack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faTwitch,
  faTiktok,
  faYoutube,
  faDiscord,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

// Tooltip Component
const Tooltip = ({ text, position }) => {
  return (
    <div
      style={{
        top: position.y,
        left: position.x,
      }}
      className={`absolute font-bold bg-white text-losoRed text-sm py-1 px-2 rounded 
      shadow-md pointer-events-none transition-opacity duration-200 
      ${window.innerWidth > 1200 ? "sm:absolute opacity-100" : "hidden"}`}
    >
      {text}
    </div>
  );
};

const socialLinks = [
  { href: "https://www.instagram.com/cam.loso", icon: faInstagram, text: "Follow me on Instagram!", social: "Instagram" },
  { href: "https://x.com/Camlosoo", icon: faXTwitter, text: "Follow me on Twitter!", social: "X" },
  { href: "https://www.tiktok.com/@camlosolive", icon: faTiktok, text: "Follow me on TikTok!", social: "Tiktok" },
  { href: "https://www.twitch.tv/camloso", icon: faTwitch, text: "Watch me on Twitch!", social: "" },
  { href: "https://www.youtube.com/@CAMLOSOLIVE", icon: faYoutube, text: "Subscribe on YouTube!", social: "YouTube" },
  { href: "mailto:camlosobusiness@gmail.com", icon: faEnvelope, text: "Email me!", social: "Email" },
  { href: "https://discord.com/invite/4fv8XAcnxu", icon: faDiscord, text: "Join my Discord!", social: "Discord" },
];

function LandingPage() {
  const [messages] = useTypewriter({
    words: [
      "It’s pronounced (CUH-MAR-REE)",
      "I'm From The NYC!",
      "I Play Semi-Professional Football",
      "Check out my recent YouTube Video!",
      "Follow me on Instagram!",
      "Follow me on Twitter!",
      "Follow me on TikTok!",
      "Join my Discord!",
    ],
    loop: Infinity,
  });

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const handleMouseEnter = (event, text) => {
    const { clientX, clientY } = event;
    setTooltip({ visible: true, x: clientX + 10, y: clientY + 10, text });
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTooltip((prev) => ({ ...prev, x: clientX + 10, y: clientY + 10 }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, text: "" });
  };
  return (
    <div className="flex flex-col min-h-screen bg-losoLight relative">
<a
  href="https://www.twitch.tv/camloso"
  target="_blank"
  rel="noopener noreferrer"
  className="block py-2 px-5 w-fit"
>
  <img
    className="size-10 transition duration-300 ease-in-out hover:brightness-75"
    src={Logo}
    alt="CamLoso Logo"
  />
</a>
      <main className="flex flex-col items-center justify-center flex-grow">
        {/*Cam PFP*/}
        <img
          src={CamLosoPFP}
          alt="Cam Loso Profile Picture"
          draggable={false}
          className="rounded-full mx-auto object-cover w-70 h-70 md:w-90 md:h-90 xl:w-100 xl:h-100"
        />

        {/*CAM LOSO*/}
        <motion.img
          src={lsblack}
          alt="Logo"
          draggable={false}
          className="w-[350px] md:w-[550px] xl:w-[550px]"
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        />

<div className="mt-3">
          {/*TyperWriter*/}
          <h2 className="flex items-center justify-center font-extrabold text-losoRed text-[15px] md:text-[18px] xl:text-[18px]">
          {messages}
          <Cursor />
        </h2>
        {/*Titles*/}
        <p className="flex items-center justify-center font-extrabold text-black text-[16px] md:text-[18px] xl:text-[18px]">
          Twitch Streamer <span className="font-extrabold mx-[5px]">|</span>{" "}
          Content Creator
        </p>

        {/*Social Links*/}
        <section
          className="flex space-x-[8px] sm:space-x-[10px] justify-center mt-[12px]"
          aria-label="Social Media Links"
        >
          {socialLinks.map(({ href, icon, text }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={text}
              className="hover:brightness-75 text-blacked transition relative"
              onMouseEnter={(e) => handleMouseEnter(e, text)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-[20px] text-losoRed md:text-[30px] xl:text-[40px]"
              />
            </a>
          ))}
        </section>
</div>
      </main>

      {/* Tooltip Render */}
      {tooltip.visible && (
        <Tooltip
          text={tooltip.text}
          position={{ x: tooltip.x, y: tooltip.y }}
        />
      )}

      {/*Footer*/}
      <footer className="text-center text-black py-4 text-[8px] xl:text-[12px]">
        <p>Built and designed by Adefela Fakorode.</p>
        <p>All rights reserved. ©</p>
      </footer>
    </div>
  );
}

export default LandingPage;
