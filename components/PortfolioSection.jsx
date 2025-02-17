"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSection = () => {
  return (
    <div className='bg-neutral-100 px-20 pt-10 min-h-screen' >
        <div className="md:flex items-center justify-between w-full h-full">
        {/* Left Section - Text Animation */}
        <motion.div
            className=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-black text-5xl md:text-6xl font-bold tracking-wide leading-none">
            Transforming Concepts <br className="hidden md:flex" /> Into 
            <span className="text-lightGreen"> Impactful</span>
            <br className="hidden md:flex" />
            Software Solutions
            </h1>
            <motion.p
            className="text-black text-xl mt-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            >
            We transform your concepts into intuitive, efficient software that propels
            <br className="hidden md:flex" />
            your business forward—seamlessly and elegantly, from vision to reality.
            </motion.p>

            <div className="mt-10">
            <Link
                href="#"
                className="bg-lightGreen text-black font-medium text-lg px-6 py-4 rounded-full hover:bg-black hover:text-white"
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
            <div className="border border-sky-900 rounded-full p-10 animate-spin-slow">
            <div className="border border-black rounded-full p-10 animate-spin-fast">
                <Image
                src="/assets/earth.png"
                className="rounded-full"
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

export default PortfolioSection;
