import React from "react";
import { motion } from "framer-motion";

type Props = {
  logoUrl: string;
  progress: number;
  directLeft?: boolean;
};

const Skill = ({ logoUrl, progress, directLeft }: Props) => {
  return (
    <div className="relative group flex items-center justify-center cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: directLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={logoUrl}
        alt=""
        className="w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full border border-gray-500 object-cover group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="w-14 h-14 flex items-center justify-center lg:w-20 lg:h-20 rounded-full border border-gray-500 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0">
        <div>
          <p className="text-xl opacity-100 font-bold text-black">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
