"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      {/* Skills list */}
      <div className="grid grid-cols-4 gap-7 lg:gap-10 mt-9">
        {/* HTML */}
        <Skill progress={90} logoUrl="/skills/html5.png" directLeft={true} />
        <Skill progress={85} logoUrl="/skills/css3.png" directLeft={true} />
        <Skill progress={90} logoUrl="/skills/js.png" directLeft={true} />
        <Skill progress={90} logoUrl="/skills/tslogo.png" directLeft={true} />
        <Skill progress={80} logoUrl="/skills/react.png" directLeft={true} />
        <Skill progress={80} logoUrl="/skills/nextjs.png" directLeft={true} />
        <Skill progress={80} logoUrl="/skills/tailwind.png" directLeft={true} />
        <Skill progress={60} logoUrl="/skills/sanity.png" directLeft={true} />
        <Skill progress={90} logoUrl="/skills/git.png" directLeft={false} />
        <Skill progress={90} logoUrl="/skills/github.png" directLeft={false} />
        <Skill
          progress={100}
          logoUrl="/skills/metamask.png"
          directLeft={false}
        />
        <Skill
          progress={90}
          logoUrl="/skills/postgress.png"
          directLeft={false}
        />
        <Skill
          progress={100}
          logoUrl="/skills/solidityLogo.png"
          directLeft={false}
        />
        <Skill progress={80} logoUrl="/skills/web3.jpeg" directLeft={false} />
        <Skill progress={75} logoUrl="/skills/etherjs.png" directLeft={false} />
        <Skill
          progress={100}
          logoUrl="/skills/msoffice.jpg"
          directLeft={false}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
