"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const EnoughTalkBar = () => {
  const { ref, inView } = useInView({ threshold: 0.3 }); // Ref for the component, triggers at 30% visibility
  const [clientCount, setClientCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      let clientCounter = 0;
      let yearsCounter = 0;

      const clientInterval = setInterval(() => {
        clientCounter++;
        setClientCount(clientCounter);
        if (clientCounter >= 50) clearInterval(clientInterval);
      }, 20);

      const yearsInterval = setInterval(() => {
        yearsCounter++;
        setYearsCount(yearsCounter);
        if (yearsCounter >= 5) clearInterval(yearsInterval);
      }, 100);

      return () => {
        clearInterval(clientInterval);
        clearInterval(yearsInterval);
      };
    }
  }, [inView, controls]);

  return (
    <div className='bg-lightBlack px-10 pt-5 pb-10' >
        <motion.div
      ref={ref}
      className="w-full py-10 px-10 bg-white rounded-lg mt-10"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <motion.div
        className="md:flex items-center justify-between w-full"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <div className="md:w-2/3">
          <motion.h1
            className="text-3xl font-extrabold text-sky-900"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            Enough Talk, Let's Get To Work
          </motion.h1>
          <motion.p
            className="text-md font-medium mt-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
            }}
          >
            Talking can only take us so far—now it's time to take action. Whether it's launching a new project, solving a complex challenge, or bringing your vision to life, we're ready to roll up our sleeves and make things happen. Let’s build something great together!
          </motion.p>
        </div>
        <motion.div
          className="md:flex items-center justify-end gap-10 md:w-1/3"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, scale: 1, transition: { delay: 0.3 } },
          }}
        >
          <Link href='' className='bg-black text-white font-medium text-md px-6 py-4 rounded-full hover:bg-white hover:text-black hover:border hover:border-black '>GET STARTED NOW</Link>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default EnoughTalkBar;
