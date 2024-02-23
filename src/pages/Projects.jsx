import React from "react";
import { motion } from "framer-motion";
import videoInventory from "../assets/videoInventory.mp4";

const Projects = () => {
  return (
    <motion.div className="min-w-screen min-h-screen mx-[9rem] sm:-mt-32 flex flex-col-reverse text-xs sm:text-base sm:flex-row items-center justify-between">
      <motion.div className="relative scale-90 sm:-ml-16 sm:mt-16 sm:mb-0 mb-[18rem]  w-min lg:pl-10 xl:pl-20">
        <motion.div className="sm:mr-10 shadow-lg rounded-lg overflow-hidden relative sm:w-[30rem] sm:h-[20rem] w-[20rem] h-[10rem]">
          <motion.video
            src={videoInventory}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div className="-ml-4 sm:ml-0">
        <motion.p className="pt-[4.5rem] sm:text-right text-amber-500 font-gothic tracking-[.5rem] font-semibold text-center">
          INTERNSHIP PROJECT
        </motion.p>
        <motion.div className="relative">
          <motion.p className="w-[30rem] z-10 mt-2 font-bold font-gothic sm:text-3xl relative sm:text-right text-center text-2xl">
            IT Inventory Program
          </motion.p>
          <motion.div className="w-[10rem] border-t-[10px] rounded-xl -mt-3 sm:right-0 sm:absolute mx-auto border-amber-500 opacity-30" />
        </motion.div>
        <motion.p className="sm:w-[30rem] w-[20rem] sm:text-justify text-center mt-5 break-words mx-auto">
          <span className="text-amber-500"> It Inventory system</span>,
          this project was created when I was an intern at
          sense sunset seminyak, i've given 3 weeks to create and deploy the
          software to the local server, and during those 3 weeks i've been able
          to apply crud operations including connecting it to a database,
          creating frontend and backend, also deploy it to a local server.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
