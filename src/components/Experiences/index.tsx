import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experiences
      </h3>

      {/* Experience Cards */}
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experiences;
