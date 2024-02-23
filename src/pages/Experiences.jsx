import React from "react";
import {motion} from "framer-motion";
import Sense1 from "../assets/sense-1.jpg";
import Sense2 from "../assets/sense-3.jpeg";
import Sense3 from "../assets/sense-4.jpeg";
import Sense4 from "../assets/sense-5.jpg";

const Experiences = () => {
  return (
    <motion.div className="min-w-screen min-h-screen sm:mx-[9rem] xl:mx-[11.6rem] text-center sm:text-left flex flex-col mx-auto sm:flex-row items-center sm:justify-between text-xs sm:text-base">
      <motion.div>
        <motion.p className="pt-[4.5rem] text-amber-500 font-gothic tracking-[.5rem] font-semibold ">
          EXPERIENCE
        </motion.p>
        <motion.p className="w-[30rem] mt-2 font-bold font-gothic sm:text-3xl relative text-2xl">
          6 months experience in <br /> IT Departement
          <motion.div className="w-[10rem] border-t-[10px] rounded-xl -mt-3 border-amber-500 opacity-40 mx-auto sm:mx-0" />
        </motion.p>
        <motion.p className="sm:w-[30rem] w-[20rem] sm:text-justify text-center mt-5 break-words mx-auto">
          from January 2023 to June 2023, I carried out an industrial work
          practice program held by the Bali Global Denpasar IT Vocational School
          at the{" "}
          <span className="text-amber-500">Sense Sunset Hotel Seminyak</span>,
          there I carried out duties in the IT department and learned many
          things ranging from soft skills to hard skills
          <br />
          <br />I learned about networks and software and I had the opportunity
          to apply the knowledge I had developed in creating a program called IT
          Inventory System project which was created in order to make it easier
          for the IT department to create records of incoming and outgoing item.
        </motion.p>
      </motion.div>
      <motion.div
        className="relative overflow-y-scroll shadow-xl mt-20 h-[17rem] scale-125"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none", 
          },
        }}
      >
        <motion.div className="shadow-md rounded-lg w-[17rem] h-[17rem] mt-0 overflow-hidden">
          <img src={Sense1} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="shadow-md rounded-lg w-[17rem] h-[17rem] mt-10 overflow-hidden">
          <img src={Sense2} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="shadow-md rounded-lg w-[17rem] h-[17rem] mt-10 overflow-hidden">
          <img src={Sense3} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="shadow-md rounded-lg w-[17rem] h-[17rem] mt-10 overflow-hidden">
          <img src={Sense4} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experiences;
