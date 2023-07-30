"use client";
import { motion } from "framer-motion";
type Props = {};

const Panaverse = (props: Props) => {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] bg-[rgb(45,45,45)] p-10 snap-center opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300 overflow-hidden">
      {/* Company Picture */}
      <img
        // initial={{ y: -200, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true }}
        src="/panaverse.jpeg"
        alt="company image"
        className="w-20 h-20 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
      />

      {/* Details */}
      <div className="px-0 md:px-10">
        {/* Designation */}
        <h4 className="text-2xl md:text-3xl font-light">FullStack Developer</h4>

        {/* Company Name */}
        <p className="font-bold text-xl md:text-2xl mt-1">Panaverse DAO</p>

        {/* Area of work */}
        <div className="flex space-x-3 my-4">
          <img
            src="/solidityLogo.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img src="/nextjs.jpeg" alt="" className="w-10 h-10 rounded-full" />
          <img src="/tailwind.png" alt="" className="w-10 h-10 rounded-full" />
          <img src="/tslogo.png" alt="" className="w-10 h-10 rounded-full" />
          <img src="/vercel.jpg" alt="" className="w-10 h-10 rounded-full" />
          <img
            src="/java-script.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          {/* <img src="/web3.jpeg" alt="" className="w-10 h-10 rounded-full" /> */}
        </div>

        {/* Start and End Date */}
        <p className="uppercase py-4 text-gray-400">
          Started: Oct, 2022 - Ended: Continue...
        </p>

        {/* Summery Points */}
        <ul className="list-disc space-y-4 ml-5 text-base md:text-lg">
          <li>Learning Front End Skills using Next.js and Tailwind CSS</li>
          <li>Working on TypeScript, Javascript Vercel Postgress</li>
        </ul>
      </div>
    </article>
  );
};

export default Panaverse;
