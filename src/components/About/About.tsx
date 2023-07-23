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
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image width="400" height="400" alt="Picture" src={"/pic.jpg"} />
      </motion.div>
    </div>
  );
};

export default About;
