"use client";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] bg-[rgb(45,45,45)] p-10 snap-center opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300 overflow-hidden">
      {/* Company Picture */}
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/betterLogics.png"
        alt="company image"
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
      />

      {/* Details */}
      <div className="px-0 md:px-10">
        {/* Designation */}
        <h4 className="text-2xl md:text-3xl font-light">
          Blockchain Developer
        </h4>

        {/* Company Name */}
        <p className="font-bold text-xl md:text-2xl mt-1">Better Logics</p>

        {/* Area of work */}
        <div className="flex space-x-3 my-4">
          <img
            src="/solidityLogo.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/solidityLogo.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/solidityLogo.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="/solidityLogo.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Start and End Date */}
        <p className="uppercase py-4 text-gray-400">Started... - Ended...</p>

        {/* Summery Points */}
        <ul className="list-disc space-y-4 ml-5 text-base md:text-lg">
          <li>Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
