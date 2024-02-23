import React from "react";
import { motion } from "framer-motion";
import Profile2 from "../assets/profile2.png";

const Profile = () => {
  return (
    <motion.div className="min-w-screen min-h-screen mx-[9rem] flex flex-col-reverse text-xs sm:text-base sm:flex-row items-center justify-between">
      <motion.div className="shadow-xl shadow-black-100 w-[17rem] mb-11 sm:mt-10">
        <img src={Profile2} alt="" />
      </motion.div>
      <motion.div className="sm:ml-0">
        <motion.p className="pt-[4.5rem] sm:text-right text-amber-500 font-gothic tracking-[.5rem] font-semibold text-center">
          ABOUT ME
        </motion.p>
        <motion.div className="relative">
          <motion.p className="w-[30rem] z-10 mt-2 font-bold font-gothic sm:text-3xl relative sm:text-right text-center text-2xl">
            Ida Bagus Dharma Abimantra
          </motion.p>
          <motion.div className="w-[10rem] border-t-[10px] rounded-xl -mt-3 sm:right-0 sm:absolute mx-auto border-amber-500 opacity-30" />
        </motion.div>
        <motion.p className="sm:w-[30rem] w-[20rem] sm:text-justify text-center mt-5 break-words mx-auto">
          Hi there, I'm Gus Abi, a tech enthusiast who is interested in web
          development, living in Denpasar. I am currently studying at Vocational High School of Technology Bali Global Denpasar, majoring in Multimedia. My
          passion for technology existed when I was in 10th grade at vocational
          school, and I hope to always learn and increase my knowledge in the
          future, because at this time learning is not just an option, but a
          necessity.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
