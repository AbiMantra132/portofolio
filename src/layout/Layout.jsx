import React from 'react'
import Home from '../pages/Home'
import Experiences from '../pages/Experiences'
import Navbar from '../components/Navbar'
import {motion} from 'framer-motion'
import Education from '../pages/Education'
import Projects from '../pages/Projects'
import Profile from '../pages/Profile'
import Skills from '../pages/Skills'

const Layout = () => {
  return (
    <motion.div className="overflow-x-hidden bg-white">
      <motion.div className="z-30 relative">
        <Navbar />
      </motion.div>
      <motion.div>
        <Home />
        <Profile />
        <Skills />
        <Education />
        <Experiences />
        <Projects />
      </motion.div>
    </motion.div>
  );
}

export default Layout