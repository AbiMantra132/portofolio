import React from 'react'
import {motion} from 'framer-motion'
import SD from '../assets/WhatsApp Image 2023-03-23 at 21.24.36.jpeg'
import SMP from '../assets/IMG-20210401-WA0045-1.jpg'
import SMK from '../assets/Suasana kunjungan dari SMK TI Bali Global Jimbaran.jpeg'

const Education = () => {
  return (
    <motion.section className="bg-black relative">
      <motion.div className="flex flex-col sm:flex-row">
        <motion.div className="w-full relative text-xl">
          <motion.img
            src={SD}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <motion.p className="absolute font-gothic font-semibold bottom-24 left-8 text-amber-500 tracking-widest">
            2012 - 2018
          </motion.p>
          <motion.p className="absolute font-gothic font-bold bottom-[66px] left-8 text-white text-xl tracking-widest">
            SDN 6 SANUR
          </motion.p>
        </motion.div>
        <motion.div className="w-full text-xl relative">
          <motion.img
            src={SMP}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <motion.p className="absolute font-gothic font-semibold bottom-24 left-8 text-amber-500 tracking-widest">
            2018 - 2021
          </motion.p>
          <motion.p className="absolute font-gothic font-bold bottom-[66px] left-8 text-white text-xl tracking-widest">
            SMPN 9 DENPASAR
          </motion.p>
        </motion.div>
        <motion.div className="w-full text-xl relative">
          <motion.img
            src={SMK}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <motion.p className="absolute font-gothic font-semibold bottom-24 left-8 text-amber-500 tracking-widest">
            2021 - 2024
          </motion.p>
          <motion.p className="absolute font-gothic font-bold bottom-10 left-8 text-white text-xl tracking-widest">
            SMK TI BALI GLOBAL <br />
            DENPASAR
          </motion.p>
        </motion.div>
        <motion.div className="w-full text-xl relative sm:h-auto">
          <motion.img
            src={SMK}
            alt=""
            className="w-full h-full object-cover opacity-0"
          />
          <motion.p className="absolute font-gothic font-semibold bottom-24 left-8 text-amber-500 tracking-widest">
            2024 - Future
          </motion.p>
          <motion.p className="absolute font-gothic font-bold bottom-[66px] left-8 text-white text-xl tracking-widest">
            COMING SOON
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Education