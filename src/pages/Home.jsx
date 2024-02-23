import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../assets/profile.png";
import Complement from "../assets/complement.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section className="max-h-full min-h-screen min-w-screen relative overflow-hidden pt-36">
      <motion.div>
        <motion.p className="z-10 text-sm relative text-center font-gothic tracking-wide md:text-xl lg:text-2xl font-normal">
          👋 Hello, my name is Gus Abi
        </motion.p>
        <motion.p className="text-center font-gothic tracking-widest text-5xl md:text-9xl font-extrabold lg:mt-16 mt-10">
          fullstack
        </motion.p>
        <motion.p
          className="text-center z-20 relative font-gothic tracking-widest text-5xl md:text-9xl font-extrabold lg:-mt-32 hidden sm:block"
          style={{
            WebkitTextStroke: "1px white", // For webkit browsers like Chrome and Safari
            textStroke: "1px white", // Standard text stroke
            WebkitTextFillColor: "transparent", // For webkit browsers like Chrome and Safari
            textFillColor: "transparent", // Standard text fill color
          }}
        >
          fullstack
        </motion.p>
        <motion.p className="text-center font-gothic tracking-widest text-5xl md:text-9xl text-amber-500 font-extrabold sm:mt-4 mt-2">
          JAVASCRIPT
        </motion.p>
        <motion.div></motion.div>
      </motion.div>
      <motion.div className="relative bg-white"></motion.div>
      <motion.div className="flex justify-center -z-1">
        <motion.img
          src={Profile}
          alt=""
          className="lg:block absolute bottom-[10rem]  sm:absolute sm:bottom-0 sm:scale-100 scale-[2.5] w-[65rem]"
        />
      </motion.div>
      <motion.img
        src={Complement}
        alt=""
        className="absolute min-w-screen bottom-0 z-0"
      />
    </motion.section>
  );
};

export default Home;
