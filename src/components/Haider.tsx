"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Haider = (props: Props) => {
  return (
    <header className="sticky top-0 max-w-7xl mx-auto z-20 xl:items-center mb-14">
      <nav className="flex justify-between items-start">
        {/* Social Icons */}
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex"
        >
          {/* Youtube */}
          <SocialIcon
            bgColor="transparent"
            fgColor="gray"
            url="https://www.youtube.com/@JawwadAhmadDev"
          />

          {/* LinkedIn */}
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.linkedin.com/in/jawwad-ahmad-2b2334246/"
          />

          {/* Github */}
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://github.com/JawwadAhmadDev"
          />
          {/* <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.instagram.com/haiderkhan/"
          /> */}
        </motion.div>

        {/* Email Link */}
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center text-gray-400 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
            url="mailto:<jawwadahmad.edu@gmail.com>"
          />
          <p className="uppercase hidden md:inline-flex">Get In Touch</p>
        </motion.div>
      </nav>
    </header>
  );
};

export default Haider;
