import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      if (yOffset >= 100) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mounting

  return (
    <motion.section
      className={`flex justify-evenly h-[8rem] pt-5 bg-white items-center scale-110 md:-mt-5 fixed w-full ${
        isBlurred ? "backdrop-blur-3xl bg-opacity-30" : ""
      }`}
    >
      <motion.img
        src={Logo}
        alt="logo"
        className="md:w-[10rem] md:h-[10rem] w-[5rem] h-[5rem]"
      />
      <motion.div className="md:hidden grid-cols-4 min-h-10 items-center w-[40rem] text-center hidden">
        <motion.p className="hover:font-semibold cursor-pointer hover:-translate-y-1 hover:text-lg transition-all font-sans">
          Profile
        </motion.p>
        <motion.p className="hover:font-semibold cursor-pointer hover:-translate-y-1 hover:text-lg transition-all">
          Experiences
        </motion.p>
        <motion.p className="hover:font-semibold cursor-pointer hover:-translate-y-1 hover:text-lg transition-all">
          Skills
        </motion.p>
        <motion.p className="hover:font-semibold cursor-pointer hover:-translate-y-1 hover:text-lg py-2 px-3 bg-black shadow-sm text-white rounded-full transition-all">
          Let's Talk
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Navbar;
