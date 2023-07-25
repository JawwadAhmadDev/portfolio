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
        className="mt-14 md:mb-0 flex-shrink-0 h-52 w-52 rounded-full object-cover md:rounded-lg md:w-56 md:h-72 xl:w-[350px] xl:h-[450px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-3xl font-semibold md:font-bold">
          Here is a{" "}
          <span className="underline decoration-yellow-700">little</span>{" "}
          background
        </h3>
        <p className="text-base md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          accusamus nemo numquam repellendus suscipit id, necessitatibus aut
          eveniet quo maxime rerum, voluptas consequuntur voluptate dolor atque,
          aspernatur neque. Vero, totam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Natus accusamus nemo numquam repellendus suscipit
          id, necessitatibus aut eveniet quo maxime rerum, voluptas consequuntur
          voluptate dolor atque, aspernatur neque. Vero, totam.
        </p>
      </div>
    </div>
  );
};

export default About;
