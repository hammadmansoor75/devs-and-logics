"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <div className='bg-lightBlack px-10 py-5 min-h-screen' >
        <div className="md:flex items-center justify-center gap-10 w-full h-full">
        {/* Left Section - Text Animation */}
        <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide leading-none">
            Turning Ideas Into <br className="hidden md:flex" />
            <span className="text-lightGreen">Seamless </span>
            <br className="hidden md:flex" />
            Software Solutions
            </h1>
            <motion.p
            className="text-white text-xl mt-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            >
            From concept to completion, we create software that drives your
            <br className="hidden md:flex" />
            business forward with efficiency and elegance.
            </motion.p>

            <div className="mt-10">
            <Link
                href="#"
                className="bg-lightGreen text-black font-medium text-lg px-6 py-4 rounded-full hover:bg-white"
            >
                Get Free Proposal
            </Link>
            </div>
        </motion.div>

        {/* Right Section - Image with Spinning Border */}
        <motion.div
            className="mt-10 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className="border border-lightGreen rounded-full p-10 animate-spin-slow">
            <div className="border border-white rounded-full p-10 animate-spin-fast">
                <Image
                src="/assets/landing-image.svg"
                className=""
                alt="landing image"
                height={400}
                width={400}
                />
            </div>
            </div>
        </motion.div>
        </div>
    </div>
  );
};

export default HomeSection;
