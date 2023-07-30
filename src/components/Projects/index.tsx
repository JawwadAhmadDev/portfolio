"use client";
import { motion } from "framer-motion";
import { projects } from "./projects";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      {/* <h3 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        Click on the Project Name to see Code
      </h3> */}

      <div className="relative top-7 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600/75">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={project.picUrl}
              alt=""
              className=" h-56 md:h-64 object-cover shadow-lg shadow-yellow-500/75 rounded-xl"
            />

            <div className="md:space-y-7 px-0 md:px-10 max-w-5xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-center">
                {!project.completed && (
                  <span className="font-normal text-lg mr-6 text-center text-yellow-200/60 animate-pulse">
                    *Under Process*
                  </span>
                )}
                <span className="underline decoration-yellow-500/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
                <span className="ml-4">
                  <SocialIcon
                    fgColor="gray"
                    bgColor="transparent"
                    url={project.github}
                  />
                </span>
                {project.live?.isLive && (
                  <span className="">
                    <SocialIcon
                      fgColor="gray"
                      bgColor="transparent"
                      url={project.live.link}
                    />
                  </span>
                )}
              </h3>

              <p className="text-center text-sm font-extralight md:text-left md:font-normal md:text-base lg:text-lg">
                {project.description}
                {project.onlySmartContract && (
                  <span className="font-semibold text-gray-400 animate-pulse">
                    {" "}
                    [Only Smart Contracts]
                  </span>
                )}
              </p>
              <Link
                href={project.furtherDetail}
                className="underline decoration-yellow-500/75 text-gray-300 text-center text-sm font-extralight md:text-left md:font-normal"
              >
                Further Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-amber-500/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
