"use client";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative top-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600/75">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/project.png"
              alt=""
              className=" h-56 md:h-64 object-cover"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-center">
                <span className="underline decoration-yellow-500/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h3>
              <p className="text-center md:text-left md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                minus sequi molestiae laboriosam expedita nemo, nihil pariatur
                maiores officiis? Facilis sequi quidem sint dolorum consequatur
                nam nemo sapiente accusamus ducimus.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-amber-500/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
