import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Haider = (props: Props) => {
  return (
    <header className="sticky top-0 max-w-7xl mx-auto z-20 xl:items-center">
      <nav className="flex justify-between items-start">
        {/* Social Icons */}
        <div className="flex">
          <SocialIcon
            bgColor="transparent"
            fgColor="gray"
            url="https://www.youtube.com/@JawwadAhmadDev"
          />
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.linkedin.com/in/jawwad-ahmad-2b2334246/"
          />
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
          {/* <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.facebook.com/haiderkhan"
          /> */}
        </div>
        {/* Email Link */}
        <div className="flex flex-row items-center text-gray-400 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
            url="mailto:<jawwadahmad.edu@gmail.com>"
          />
          <p className="uppercase hidden md:inline-flex">Get In Touch</p>
        </div>
      </nav>
    </header>
  );
};

export default Haider;
