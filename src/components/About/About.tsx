"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
      {/* About word on the top */}
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      {/* picture with about */}
      <motion.img
        src="/pic.jpg"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 h-52 w-52 rounded-full object-cover md:rounded-lg md:w-56 md:h-72 xl:w-[350px] xl:h-[450px]"
      />
    </div>
  );
};

export default About;
