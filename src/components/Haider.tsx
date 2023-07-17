import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Haider = (props: Props) => {
  return (
    <header>
      <nav>
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
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="mailto:<jawwadahmad.edu@gmail.com>"
        />
      </nav>
    </header>
  );
};

export default Haider;
