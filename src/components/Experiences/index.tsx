import React from "react";
import BetterLogics from "./BetterLogics";
import VirtualTech from "./VirtualTech";
import Panaverse from "./Panaverse";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experiences
      </h3>

      {/* Experience Cards */}
      <div className="mt-20 w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600/75">
        <BetterLogics />
        <VirtualTech />
        <Panaverse />
      </div>
    </div>
  );
};

export default Experiences;
