import React from 'react'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <motion.div className="min-h-[25rem] -ml-[2.58rem] -pt-5 w-screen border-b-amber-500 flex flex-col text-xs sm:text-base sm:flex-row items-start justify-between sm:px-20">
      <motion.div className="relative sm:-ml-16 sm:mb-0 lg:pl-10 xl:pl-20">
        <motion.p className="pt-[4.5rem] text-amber-500 font-gothic tracking-[.5rem] font-semibold text-center">
          Skills
        </motion.p>
        <motion.div className="relative">
          <motion.p className="w-[30rem] z-10 mt-2 font-bold font-gothic sm:text-3xl relative text-center text-2xl">
            Languages & Frameworks
          </motion.p>
          <motion.div className="w-[10rem] border-t-[10px] rounded-xl -mt-3 mx-auto border-amber-500 opacity-30" />
        </motion.div>
        <motion.p className="sm:w-[24rem] w-[20rem] text-center mt-5 break-words mx-auto tracking-wide">
          HTML | CSS | Javascript | Typescript | React | TailwindCSS | NodeJS |
          ExpressJS | MongoDB | MySQL | Material UI
        </motion.p>
      </motion.div>
      <motion.div className="sm:ml-0 mb-14 sm:mb-0">
        <motion.p className=" -pt-[30rem] sm:pt-[4.5rem] text-amber-500 font-gothic tracking-[.5rem] font-semibold text-center">
          Tools
        </motion.p>
        <motion.div className="relative">
          <motion.p className="w-[30rem] z-10 mt-2 font-bold font-gothic sm:text-3xl relative text-center text-2xl">
            Coding & Design Graphic
          </motion.p>
          <motion.div className="w-[10rem] border-t-[10px] rounded-xl -mt-3 mx-auto border-amber-500 opacity-30" />
        </motion.div>
        <motion.p className="sm:w-[24rem] w-[20rem] text-center mt-5 break-words mx-auto tracking-wide">
          Visual Studio Code | Git | Github | Adobe
          Photoshop | Adobe Premiere Pro | Adobe After Effect | Adobe Illustrator | Adobe Animate | Corel Draw | Blender
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Skills