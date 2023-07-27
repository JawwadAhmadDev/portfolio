import React from "react";
import { motion } from "framer-motion";

type Props = {
  directLeft?: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className="relative group flex items-center justify-center cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: props.directLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/tslogo.png"
        alt=""
        className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full border border-gray-500 object-cover group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="w-20 h-20 flex items-center justify-center lg:w-24 lg:h-24 rounded-full border border-gray-500 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0">
        <div>
          <p className="text-xl opacity-100 font-bold text-black">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
