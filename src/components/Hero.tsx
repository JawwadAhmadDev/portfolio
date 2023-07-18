"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's JAWWAD AHMAD.",
      "Crafting digital experiences.",
      "<Bridging the gap between technology and people. />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <p>
        <span>{text}</span>
        <span className="text-3xl font-bold">
          <Cursor cursorColor="#b53e16" />
        </span>
      </p>
    </div>
  );
};

export default Hero;
